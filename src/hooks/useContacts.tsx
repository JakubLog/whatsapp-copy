/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, createContext, useState, useContext } from 'react';
import { addDoc, collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from 'firebase';
import { useError } from './useError';
import { useMessages } from 'hooks/useMessages';
import { useAuth } from './useAuth';

interface contactsTypes {
  contacts: any[];
  loading: boolean;
  addContact: (email: string) => any;
  getCurrentContacts: (hasReturned?: boolean) => Promise<void | any[]>;
}

const initialObject: contactsTypes = {
  contacts: [],
  loading: true,
  addContact: (email: string) =>
    Promise.resolve({
      response: email
    }),
  getCurrentContacts: (hasReturned = false) => Promise.resolve(console.log(hasReturned))
};

const ContactsContext = createContext<contactsTypes>(initialObject);
const ContactsProvider: React.FC = ({ children }) => {
  const { currentUser } = useAuth();
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoadingState] = useState(true);
  const { dispatchError } = useError();
  const { getLastMsgInfo } = useMessages();

  const getCurrentContacts = async (hasReturned = false) => {
    setLoadingState(true);
    const response = await getDocs(collection(db, `PROFILES/${currentUser.id}/contacts`));
    const convertedArray: any[] = [];
    response.forEach((r) => convertedArray.push(r));
    const temp: any[] = [];
    for await (const snapshot of convertedArray) {
      const lastMsg = await getLastMsgInfo(snapshot.get('name'));
      temp.push({ id: snapshot.get('id'), name: snapshot.get('name'), image: snapshot.get('image'), lastMsg });
    }
    if (hasReturned) {
      setLoadingState(false);
      return temp;
    }
    setContacts(temp);
    setLoadingState(false);
  };

  const checkContact = async (contactName: string): Promise<{ code: number; id?: string; name?: string; image?: string }> => {
    try {
      const q = query(collection(db, 'PROFILES'), where('name', '==', contactName));
      const response = await getDocs(q);
      if (response.docs.length === 1) {
        let object = {};
        response.forEach((doc) => {
          object = { id: doc.get('id'), email: doc.get('email'), image: doc.get('image') };
        });
        return { code: 200, ...object };
      }
      return { code: 404 };
    } catch (e) {
      const user = new Error('Sorry, something went wrong with checking new contact. Please try again or contact with our support!');
      dispatchError(user, e);
      return { code: 500 };
    }
  };

  const addContact = async (contactName: string) => {
    try {
      const response = await checkContact(contactName);
      if (response.code === 200) {
        const newContactPath = collection(db, `PROFILES/${currentUser.id}/contacts`);
        const newMessagePath = doc(db, `MESSAGES/${currentUser.id}__${response?.id}`);
        const newRecordOfContactPath = collection(db, `PROFILES/${response?.id}/contacts`);
        await addDoc(
          newContactPath,
          response?.image
            ? {
                id: response?.id,
                name: contactName,
                image: response?.image
              }
            : { id: response?.id, name: contactName }
        );
        await setDoc(newMessagePath, {
          owners: [currentUser.name, contactName]
        });
        await addDoc(
          newRecordOfContactPath,
          currentUser?.image
            ? {
                id: currentUser.id,
                name: currentUser.name,
                image: currentUser?.image
              }
            : { id: currentUser.id, name: currentUser.name }
        );
        getCurrentContacts();
        return { code: 201 };
      }
      return { code: 404 };
    } catch (e) {
      const user = new Error('Sorry, something went wrong with creating new contact. Please try again or contact with our support!');
      dispatchError(user, e);
    }
  };

  useEffect(() => {
    (async () => {
      if (currentUser) {
        try {
          await getCurrentContacts();
        } catch (e) {
          const user = new Error('Sorry, now we cannot get your contacts. Please try again or contact with our support!');
          dispatchError(user, e);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const object: contactsTypes = {
    contacts,
    loading,
    addContact,
    getCurrentContacts
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
