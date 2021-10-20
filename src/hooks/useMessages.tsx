import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from 'firebase';
import { storeResponse, storeRoot } from 'store';
import { useSelector } from 'react-redux';

// Interface & Types for hook
type messagesArray = [
  {
    value: string;
    date: string;
    stream: string;
  }
];
interface messageTypes {
  messages: messagesArray;
  loading: boolean;
}

// Initial object for Context
const initialMessage = {
  value: '',
  date: '',
  stream: ''
};

const initialObject: messageTypes = {
  messages: [initialMessage],
  loading: true
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

  useEffect(() => {
    setLoadingState(true);
    const path = `${currentUser.name}/messages/${contact?.name}`;
    const messagesRef = collection(db, path);
    const unsub = onSnapshot(query(messagesRef, orderBy('date', 'asc')), (snapshots) => {
      const temp: messagesArray = [initialMessage];
      temp.pop();
      snapshots.forEach((snapshot) => temp.push({ value: snapshot.get('value'), date: snapshot.get('date'), stream: snapshot.get('stream') }));
      setMessages(temp);
      setLoadingState(false);
    });
    return () => unsub();
  }, [contact?.name]);

  const object: messageTypes = {
    messages,
    loading
  };

  return <MessagesContext.Provider value={object}>{children}</MessagesContext.Provider>;
};

export const useMessages = (): messageTypes => {
  const messages = useContext(MessagesContext);
  if (!messages) console.error('Something went wrong with message hook');
  return messages;
};

export default MessagesProvider;
