import io from "socket.io-client";
const initState = {
  user: {},
  socket: {},
  users: [],
  currentUser: {}
};
const socket = io("http://localhost:5000");
socket.on("user-exist", () => {
  console.log("check USER EXIST");
});

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_USER_SUCCESS":
      let object = { socket, ...action.data };
      object.socket.emit("login-user", {
        socketid: object.socket.id,
        ...action.data
      });
      console.log("check success", object);
      return { ...state, currentUser: object };

    case "LOGOUT_USER_SUCCESS":
      socket.emit("logout-user", { socketid: socket.id });
      return {...state,currentUser:{}};
      
    case "GET_CURRENT_USER_SUCCESS":
      let object1 = { socket, ...action.data };
      console.log("check getcurrent success", object1);
      if(action.data){
        return {...state,currentUser:object1}
      }else{
        return {...state,currentUser:{}}
      }
     
     
    default:
      return state;
  }
};

export default userReducer;
