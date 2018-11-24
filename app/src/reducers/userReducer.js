import io from "socket.io-client";
const initState = {
  user: {},
  socket: {},
  users: [],
  currentUser: {},
  usersOnline:[],
  auth:true
};
const socket = io("http://localhost:5000");
socket.on("user-exist", () => {
  console.log("check USER EXIST");
});



window.socket = socket;

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_USER_SUCCESS":
      let object = { socket, ...action.data };
      console.log('long login user success',action.data);
      object.socket.emit("login-user", {
        socketid: object.socket.id,
        uid: action.data.uid 
      });
      console.log("check success", object);
      return { ...state, currentUser: object ,auth:true };

    case "LOGOUT_USER_SUCCESS":
      socket.emit("logout-user", { socketid: socket.id });
      return {...state,currentUser:{},auth:false};

    case "GET_CURRENT_USER_SUCCESS":
      let object1 = { socket, ...action.data };
      console.log("check getcurrent success",action.data);
      if(action.data){
        console.log('cao get current user',action.data)
        object1.socket.emit("login-user", {
          socketid: object1.socket.id,
          uid: action.data.uid
        });
        return {...state,currentUser:object1,auth:true}
      }else{
        return {...state,currentUser:{},auth:false}
      }
    case "GET_USER":
       return {...state,user:action.data}

    case "SET_USERS_ONLINE":
       console.log('long users online',action.data)
       return {...state,usersOnline:action.data}
     
    default:
      return state;
  }
}
export default userReducer
