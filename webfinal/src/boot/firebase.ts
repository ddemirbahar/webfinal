// src/boot/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA06xj1GDzcULGJoAuhadfGkO9ZxMQCqtI',
  authDomain: 'webfinal-db748.firebaseapp.com',
  projectId: 'webfinal-db748',
  storageBucket: 'gs://webfinal-db748.appspot.com',
  messagingSenderId: '188888657828',
  appId: '1:188888657828:web:5e0875ec692888dd785b31',
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
