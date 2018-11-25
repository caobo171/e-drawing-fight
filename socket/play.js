module.exports=(io,socket)=>{
    socket.on("client-send-word",(word,idRoom)=>{
        socket.in(idRoom).emit("server-send-word",word);
    })
}