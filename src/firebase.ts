import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyB1G7tATNTy8y42DV75mL2rPPzXgkCdct8',
  authDomain: 'whatsapp-copy-ed4d7.firebaseapp.com',
  projectId: 'whatsapp-copy-ed4d7',
  storageBucket: 'whatsapp-copy-ed4d7.appspot.com',
  messagingSenderId: '715174166022',
  appId: '1:715174166022:web:979f2bbfeeb02781364d87'
});

export const auth = getAuth();
export default app;
