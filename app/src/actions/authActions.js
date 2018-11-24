export const logIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR', err});
        })
    }
}


export const logOut= () => {
    return (dispatch, getState, {getFirebase})=> {
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type: 'LOGOUT_SUCCESS'})
        })
    }
}

export const register = (newUser) => {
    console.log('check user',newUser);
    //console.log('check user', history);
    return(dispatch, getState, {getFirebase, getFirestore})=> {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            return firestore.collection('users').doc(res.user.uid).set({
                name: newUser.name,
                avatar: newUser.avatar,
                exp: 0,
                level: 'newbie',
                matches_3_stars: 0,
                matches_win: 0,
                matches_play: 0,
                rank: 0,
                isOnline: false,
                isFighting: false,
                listFriends: ['']
            })
        }).then(()=> {
            dispatch({type: 'REGISTER_SUCCESS'})
        })
        .catch((err)=> {
            dispatch({type: 'REGISTER_ERROR', err})
        })
    }
}