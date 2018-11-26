module.exports=(io,socket)=>{
    socket.on("client-send-word",(words,idRoom)=>{ 
        socket.in(idRoom).emit("server-send-word",words);
    })

    socket.on("client-send-drawing",(x,y,px,py,roomId)=>{
        socket.in(roomId).emit("server-send-drawing",x,y,px,py);
    })
}