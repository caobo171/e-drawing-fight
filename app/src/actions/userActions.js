export const setUsersOnline = (dataUsersOnline) => {
    return (dispatch, getState) => {
          dispatch({ type: "SET_USERS_ONLINE",data:dataUsersOnline });
    };
  };
export const getUserByID = userID => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(userID)
      .get()
      .then(result => {
        console.log("long check get_user", result.data());
        dispatch({ type: "GET_USER", data: result.data() });
      });
  };
};
