/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query, addDoc, getDocs, Timestamp, where } from 'firebase/firestore';
import { db } from 'firebase';
import { storeResponse, storeRoot } from 'store';
import { useSelector } from 'react-redux';
import { useError } from 'hooks/useError';
import { useAuth } from './useAuth';

// Interface & Types for hook
type messagesArray = [
  {
    value: string;
    date: Timestamp;
    owner: string;
  }
];
interface messageTypes {
  messages: messagesArray;
  loading: boolean;
  send: (message: string) => void;
  getLastMsgInfo: (contactName: string) => Record<any, any>;
}

// Initial object for Context
const initialMessage = {
  value: '',
  date: new Timestamp(323, 323),
  owner: ''
};

const initialObject: messageTypes = {
  messages: [initialMessage],
  loading: true,
  send: (message: string) => console.log(message),
  getLastMsgInfo: (contactName: string) => ({ contactName })
};

const MessagesContext = createContext<messageTypes>(initialObject);
const MessagesProvider: React.FC = ({ children }) => {
  const { currentUser } = useAuth();
  const contact = useSelector<storeRoot, storeResponse | null>((store) => store.chat);
  const [messages, setMessages] = useState<messagesArray>([initialMessage]);
  const [chatId, setChatId] = useState<string | null>(null);
  const [loading, setLoadingState] = useState(true);
  const { dispatchError } = useError();

  useEffect(() => {
    if (currentUser) {
      try {
        setLoadingState(true);
        const messagesRef = collection(db, `MESSAGES`);
        const q_id = query(
          messagesRef,
          where('owners', 'in', [
            [currentUser.name, contact?.name || ''],
            [contact?.name || '', currentUser.name]
          ])
        );
        getDocs(q_id).then((docs) => {
          docs.forEach((doc) => {
            setChatId(doc.id);
          });
        });
        if (chatId) {
          const q_chat = query(collection(db, `MESSAGES/${chatId}/chat`), orderBy('date', 'asc'));
          const unsub = onSnapshot(q_chat, (docs) => {
            const temp: messagesArray = [initialMessage];
            temp.pop();
            docs.forEach((doc) => {
              temp.push({ date: doc.get('date'), owner: doc.get('owner'), value: doc.get('value') });
            });
            setMessages(temp);
            setLoadingState(false);
          });
          return () => {
            unsub();
            setChatId(null);
          };
        }
      } catch (e) {
        const user = new Error("We now can't fetch your messages. Please contact with administration!");
        if (e instanceof Error) dispatchError(user, e);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contact?.name, chatId, currentUser]);

  const send = async (message: string) => {
    try {
      const date = new Date();
      await addDoc(collection(db, `MESSAGES/${chatId}/chat`), {
        date,
        value: message,
        owner: currentUser.name
      });
    } catch (e) {
      const user = new Error("We now can't send your message. Please contact with administration!");
      if (e instanceof Error) dispatchError(user, e);
    }
  };

  const getLastMsgInfo = async (contactName: string) => {
    try {
      const messagesRef = collection(db, `MESSAGES`);
      const q_id = query(
        messagesRef,
        where('owners', 'in', [
          [currentUser.name, contactName],
          [contactName, currentUser.name]
        ])
      );
      let id = '';
      await getDocs(q_id).then((docs) => {
        docs.forEach((doc) => {
          id = doc.id;
        });
      });
      const records: any[] = [];
      const preparedQuery = query(collection(db, `MESSAGES/${id}/chat`), orderBy('date', 'desc'));
      const docs = await getDocs(preparedQuery);
      docs.forEach((doc) => {
        records.push({ date: doc.get('date'), value: doc.get('value') });
      });
      if (records.length === 0) records.push({ value: 'Write your first message!', date: '' });
      return {
        value: records[0].value,
        date: records[0].date
      };
    } catch (e) {
      const user = new Error("We now can't get your last messages. Please contact with administration!");
      if (e instanceof Error) dispatchError(user, e);
    }
  };

  const object: messageTypes = {
    messages,
    send,
    loading,
    getLastMsgInfo
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
