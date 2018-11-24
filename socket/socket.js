module.exports = function (io){

    var userOnline = [];
    handleDisConnect=(socketid)=>{
        userOnline = userOnline.filter(e=>{return e.socketid != socketid});
        console.log(userOnline);
    }
    io.on('connection', (socket) => {
        console.log("co nguoi ket noi"+socket.id);
        //socket.join("test-room");
        socket.on('ok',()=>{
            console.log('ok',socket.id);
        })   //chua co chuc nang tao room nen cho dai vo room nay
        require("./challenge.js")(io,socket,userOnline);
        // socket.on('challenge',(id,socketid)=>{    //id va socketid cua nguoi 2
        //     socket.join(id);
        //     socket.to(socketid).emit('challenge',id,socketid,socket.id);
        // })
        // socket.on("client-accept",(id,socketid)=>{
        //     if(socket.id==socketid){
        //          socket.join(id);
        //          console.log(socket.adapter.rooms);
        //     }
        // })
        socket.on('login-user',(data)=>{
            console.log(data);
            console.log('--------------')
            console.log(userOnline);
            if(!userOnline.find(e=> {return e.socketid===data.socketid||e.uid===data.uid})){
                userOnline.push(data);
                console.log(userOnline.length);
                
            }else{
                console.log('user exist');
                console.log(userOnline.length);
                socket.emit('user-exist');
            }

            io.sockets.emit('get-users',userOnline);
  
        })

        socket.on("client-send-drawing",(x,y,px,py,roomId)=>{
            socket.in(roomId).emit("server-send-drawing",x,y,px,py);
        })

        socket.on('logout-user',(data)=>{
            handleDisConnect(data.socketid);
        })

        socket.on('disconnect',()=>{
            handleDisConnect(socket.id);
        })
        
    })
    
}