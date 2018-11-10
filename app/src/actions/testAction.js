export const testcreate = (test) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
       const firestore = getFirestore();
       firestore.collection('tests').add({
           ...test,
           author:'vipmath'
       }).then(()=> {
           dispatch({type: 'TEST_CREATE', test});
       }).catch((err) => {
           dispatch({type:'TEST_CREATE_ERROR', err});
       })
    }
}