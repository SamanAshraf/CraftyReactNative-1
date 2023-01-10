import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'firebase/compat/storage';
import {
	initializeAuth,
	getReactNativePersistence,
} from 'firebase/auth/react-native';

const firebaseConfig = {  
  apiKey: "AIzaSyCrHX8BRGBLW8r4mTpQm61WLP2Os1acGsw",
  authDomain: "craftyapp-6efc6.firebaseapp.com",
  projectId: "craftyapp-6efc6",
  storageBucket: "craftyapp-6efc6.appspot.com",
  messagingSenderId: "699554821868",
  appId: "1:699554821868:web:32139b642cff5c7de0d7c9",
  measurementId: "G-EZRF8C657Z",
  databaseURL:"https://craftyapp-6efc6-default-rtdb.firebaseio.com/"
};
const app = firebase.initializeApp(firebaseConfig);
var auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});
auth = getAuth(app);

const db = getDatabase(app);
export { auth, db, firebase};