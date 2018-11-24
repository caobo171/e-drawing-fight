module.exports=(io,socket ,userOnline)=>{
    socket.on('challenge',(uid,socketid)=>{    //uid va socketid cua nguoi 2
        console.log('onchallenge');
        socket.join(uid);
        socket.to(socketid).emit('challenge',uid);
    })
    socket.on("client-accept",(uid)=>{
        socket.join(uid);
        var room = io.sockets.adapter.rooms[uid];
        for(c in room.sockets){
            socket.to(c).emit("server-change-route",uid);
        }
    })
}