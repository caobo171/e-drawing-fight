module.exports=(io,socket ,userOnline)=>{
    socket.on('challenge',(id,socketid)=>{    //id va socketid cua nguoi 2
        socket.join(id);
        socket.to(socketid).emit('challenge',id);
    })
    socket.on("client-accept",(id)=>{
        socket.join(id);
        var room = io.sockets.adapter.rooms[id];
        for(c in room.sockets){
            socket.to(c).emit("server-change-route",id);
        }
    })
}