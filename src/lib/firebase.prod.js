import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// uncomment this when seeding, 1 run only
// import { seedDatabase } from '../seed';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const firebase = Firebase.initializeApp(config);
// uncomment this when seeding, 1 run only
// seedDatabase(firebase);


export { firebase };
