export const logIn = (credentials) => {
    return  (dispatch, getState, {getFirebase,getFirestore}) =>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((res) => {
            firestore.collection('/users').doc(res.user.uid).get().then(response=>{
                console.log('check ',response.data());
                console.log('check user id',res.user);
                localStorage.setItem('creds',JSON.stringify(credentials))

                dispatch({type: 'LOGIN_USER_SUCCESS',data:{...response.data(), id:res.user.uid}});
            })
            
        }).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR', err});
        })
    }
}


export const logOut= () => {
    return (dispatch, getState, {getFirebase})=> {
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type: 'LOGOUT_USER_SUCCESS'})
        })
    }
}

export const register = (newUser) => {
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
                level: 0,
                certification: []
            })
        }).then(()=> {
            dispatch({type: 'REGISTER_SUCCESS'})
        }).catch((err)=> {
            dispatch({type: 'REGISTER_ERROR', err})
        })
    }
}

export const getCurrentUser = ()=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        let creds = JSON.parse(localStorage.getItem('creds'))
        if(creds){
        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then((res) => {
            firestore.collection('/users').doc(res.user.uid).get().then(response=>{
                console.log('check ',response.data());
                console.log('check user id',res.user);
                console.log("long check current user")

                dispatch({type: 'LOGIN_USER_SUCCESS',data:{...response.data(), id:res.user.uid}});
            })
            
        }).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR', err});
        })
    }


    }
}