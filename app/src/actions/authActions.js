export const logIn = credentials => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log("check", result.user);
        firestore.collection("users").doc(result.user.uid).get()
          .then(res => {
             console.log('long',result.user.uid);
            if (!res.data()) {
              const userData = {
                name: result.user.displayName,
                avatar: result.user.photoURL,
                exp: 0,
                level: 0,
                certification: []
              }
              firestore.collection("users").doc(result.user.uid).set(userData)
                .then(response => {
                   console.log('long create user');

                  dispatch({
                    type: "GET_CURRENT_USER_SUCCESS",
                    data: { ...userData, id: result.user.uid }
                  });
                });
            }else{
                console.log("long login current user",res.data());
                dispatch({
                    type: "GET_CURRENT_USER_SUCCESS",
                    data: { ...res.data(), id: result.user.uid }
                  });
            }
          });
      })
      .catch((error)=> {
        console.log("long", error);
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_USER_SUCCESS" });
      });
  };
};
