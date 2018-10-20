import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase/app";

import "firebase/firestore";
import { firebaseReducer, reactReduxFirebase } from "react-redux-firebase";
import {
  reactFireStore,
  firestoreReducer,
  reduxFirestore
} from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAHvEi-X3hvvYoFk40kpYvAW_P8-9aFHs",
  authDomain: "e-drawingfight.firebaseapp.com",
  databaseURL: "https://e-drawingfight.firebaseio.com",
  projectId: "e-drawingfight",
  storageBucket: "e-drawingfight.appspot.com",
  messagingSenderId: "1046815543674"
};

const rrfConfig = {
  userProfile: "users",
  userFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(reactReduxFirebase(firebase))
);

export default store;
