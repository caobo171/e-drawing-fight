import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import firebase from "firebase";

import "firebase/firestore";
import { firebaseReducer, reactReduxFirebase, getFirebase } from "react-redux-firebase";
import {
  // reactFireStore,
  firestoreReducer,
  reduxFirestore,
  getFirestore
} from "redux-firestore";

// Reducers
import testReducer from './reducers/testReducer';
import userReducer from './reducers/userReducer';

const firebaseConfig = {
  apiKey: "AIzaSyDAHvEi-X3hvvYoFk40kpYvAW_P8-9aFHs",
  authDomain: "e-drawingfight.firebaseapp.com",
  databaseURL: "https://e-drawingfight.firebaseio.com",
  projectId: "e-drawingfight",
  storageBucket: "e-drawingfight.appspot.com",
  messagingSenderId: "1046815543674"
};

const rrfConfig = {
  // userProfile: "users",
  userFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true
})

firebase.auth().onAuthStateChanged((user) =>{
  if(user){
      store.dispatch({type:'GET_CURRENT_USER_SUCCESS', data:user});
  }else{
      store.dispatch({type:'GET_CURRENT_USER_SUCCESS',data:null});
  }
});

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  test: testReducer,
  user: userReducer
});

const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    )
);

export default store;
