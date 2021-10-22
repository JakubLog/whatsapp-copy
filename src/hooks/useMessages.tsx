import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query, addDoc, Timestamp } from 'firebase/firestore';
import { db } from 'firebase';
import { storeResponse, storeRoot } from 'store';
import { useSelector } from 'react-redux';
import { useError } from 'hooks/useError';

// Interface & Types for hook
type messagesArray = [
  {
    value: string;
    date: Timestamp;
    stream: string;
  }
];
interface messageTypes {
  messages: messagesArray;
  loading: boolean;
  send: (message: string) => void;
}

// Initial object for Context
const initialMessage = {
  value: '',
  date: new Timestamp(323, 323),
  stream: ''
};

const initialObject: messageTypes = {
  messages: [initialMessage],
  loading: true,
  send: (message: string) => console.log(message)
};

// TEMP OBJECT
const currentUser = {
  name: 'kontakt.jakubfedoszczak@gmail.com'
};

const MessagesContext = createContext<messageTypes>(initialObject);
const MessagesProvider: React.FC = ({ children }) => {
  const contact = useSelector<storeRoot, storeResponse | null>((store) => store.chat);
  const [messages, setMessages] = useState<messagesArray>([initialMessage]);
  const [loading, setLoadingState] = useState(true);
  const { dispatchError } = useError();
  const pathToContact = `${currentUser.name}/messages/${contact?.name}`;

  useEffect(() => {
    try {
      setLoadingState(true);
      const messagesRef = collection(db, pathToContact);
      // throw new Error('Problem');
      const unsub = onSnapshot(query(messagesRef, orderBy('date', 'asc')), (snapshots) => {
        const temp: messagesArray = [initialMessage];
        temp.pop();
        snapshots.forEach((snapshot) => temp.push({ value: snapshot.get('value'), date: snapshot.get('date'), stream: snapshot.get('stream') }));
        setMessages(temp);
        setLoadingState(false);
      });
      return () => unsub();
    } catch (e) {
      const user = new Error("We now can't fetch your messages. Please contact with administration!");
      if (e instanceof Error) dispatchError(user, e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contact?.name]);

  const send = async (message: string) => {
    try {
      const date = new Date();
      await addDoc(collection(db, pathToContact), {
        date,
        stream: 'outgoing',
        value: message
      });
    } catch (e) {
      const user = new Error("We now can't send your message. Please contact with administration!");
      if (e instanceof Error) dispatchError(user, e);
    }
  };

  const object: messageTypes = {
    messages,
    send,
    loading
  };

  return <MessagesContext.Provider value={object}>{children}</MessagesContext.Provider>;
};

export const useMessages = (): messageTypes => {
  const { dispatchError } = useError();

  const messages = useContext(MessagesContext);
  if (!messages)
    dispatchError(
      new Error('Something went wrong with useMessage hook. Please contact with administration!'),
      new Error('Context is empty in useMessage hook. Look at the provider!')
    );
  return messages;
};

export default MessagesProvider;
