export const logIn = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        firestore
          .collection("users")
          .doc(result.user.uid)
          .get()
          .then(res => {
            if (!res.data()) {
              const userData = {
                name: result.user.displayName,
                avatar: result.user.photoURL,
                exp: 0,
                level: 0,
                certification: []
              };
              firestore
                .collection("users")
                .doc(result.user.uid)
                .set(userData)
                .then(response => {
                  dispatch({
                    type: "GET_CURRENT_USER_SUCCESS",
                    data: { ...userData, uid: result.user.uid }
                  });
                }).catch(err=>{
                  dispatch({
                    type: "GET_CURRENT_USER_SUCCESS",
                    data: null
                  });
                })
            } else {
              dispatch({
                type: "GET_CURRENT_USER_SUCCESS",
                data: { ...res.data(), uid: result.user.uid }
              });
            }
          });
      })
      .catch(error => {
        dispatch({ type: "GET_CURRENT_USER_SUCCESS", data: null });
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

export const getCurrentUser = (firestore, dataUser, dispatch) => {
  firestore
    .collection("users")
    .doc(dataUser.uid)
    .get()
    .then(result => {
      dispatch({
        type: "GET_CURRENT_USER_SUCCESS",
        data: { ...result.data(), uid: dataUser.uid }
      });
    })
    .catch(err => {
      dispatch({ type: "GET_CURRENT_USER_SUCCESS", data: null });
    });
};
