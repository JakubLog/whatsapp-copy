import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User, UserCredential } from '@firebase/auth';
import { collection, getDocs } from '@firebase/firestore';
import { auth, db } from 'firebase';
import { query, where } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useError } from './useError';

interface authTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentUser: any;
  signIn: (email: string, password: string) => Promise<UserCredential | void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const initialObject: authTypes = {
  currentUser: null,
  signIn: (email: string, password: string) => Promise.resolve(console.log(email)),
  logout: () => Promise.resolve(console.log('Wylogowywanie...')),
  loading: true
};

const AuthContext = createContext<authTypes>(initialObject);
const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  const [loading, setLoadingState] = useState(true);
  const { dispatchError } = useError();

  useEffect(() => {
    (async () => {
      try {
        const unsub = onAuthStateChanged(auth, async (user) => {
          if (user) {
            let temp = {};
            const docs = await getDocs(query(collection(db, 'PROFILES'), where('email', '==', user.email)));
            docs.forEach((doc) => {
              temp = {
                name: doc.get('name'),
                id: doc.get('id'),
                image: doc.get('image')
              };
            });
            const readyUser = { ...user, ...temp };
            setCurrentUser(readyUser);
          } else {
            setCurrentUser(null);
          }
          setLoadingState(false);
        });
        return () => {
          unsub();
          setCurrentUser(null);
        };
      } catch (e) {
        const userError = new Error('Sorry, something went wrong with authentication!');
        dispatchError(userError, e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  const object: authTypes = {
    currentUser,
    signIn,
    logout,
    loading
  };
  return <AuthContext.Provider value={object}>{children}</AuthContext.Provider>;
};

export const useAuth = (): authTypes => {
  const { dispatchError } = useError();

  const auth = useContext(AuthContext);
  if (!auth)
    dispatchError(
      new Error('Something went wrong with authentication! Please contact with us!'),
      new Error('Context is not defined in useAuth hook!')
    );
  return auth;
};

export default AuthProvider;
