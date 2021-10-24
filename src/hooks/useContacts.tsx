/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, createContext, useState, useContext } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebase';
import { useError } from './useError';
import { useMessages } from 'hooks/useMessages';
import { useAuth } from './useAuth';

interface contactsTypes {
  contacts: any[];
}

const initialObject: contactsTypes = {
  contacts: []
};

const ContactsContext = createContext<contactsTypes>(initialObject);
const ContactsProvider: React.FC = ({ children }) => {
  const { currentUser } = useAuth();
  const [contacts, setContacts] = useState<any[]>([]);
  const { dispatchError } = useError();
  const { getLastMsgInfo } = useMessages();

  useEffect(() => {
    (async () => {
      if (currentUser) {
        try {
          const idResponse = await getDocs(query(collection(db, 'PROFILES'), where('id', '==', currentUser.id)));
          let id = '';
          idResponse.forEach((res) => {
            id = res.id;
          });
          const response = await getDocs(collection(db, `PROFILES/${id}/contacts`));
          const convertedArray: any[] = [];
          response.forEach((r) => convertedArray.push(r));
          const temp: any[] = [];
          for await (const snapshot of convertedArray) {
            const lastMsg = await getLastMsgInfo(snapshot.get('name'));
            temp.push({ id: snapshot.get('id'), name: snapshot.get('name'), image: snapshot.get('image'), lastMsg });
          }
          setContacts(temp);
        } catch (e) {
          const user = new Error('Sorry, now we cannot get your contacts. Please try again or contact with our support!');
          dispatchError(user, e);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const object: contactsTypes = {
    contacts
  };

  return <ContactsContext.Provider value={object}>{children}</ContactsContext.Provider>;
};

export const useContacts = (): contactsTypes => {
  const { dispatchError } = useError();

  const contacts = useContext(ContactsContext);
  if (!contacts)
    dispatchError(new Error("There's a problem with your contacts, please contact us!"), new Error('Problem with context in useContacts hook!'));
  return contacts;
};

export default ContactsProvider;
