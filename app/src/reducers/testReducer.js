const initState ={

}

const testReducer = (state = initState, action) => {
    switch(action.type){
        case 'TEST_CREATE':
          console.log('created success', action.test);
          return state;
        case 'TEST_CREATE_ERROR':
          console.log('created fail', action.err);
          return state;
        default: 
          return state;
    }
}

export default testReducer;