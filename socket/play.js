module.exports=(io,socket)=>{
    socket.on("client-send-word",(word,idRoom)=>{ console.log("long send word",word);
        socket.in(idRoom).emit("server-send-word",word);
    })
}