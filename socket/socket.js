module.exports = function (io){

    var userOnline = [];
    handleDisConnect=(socketid)=>{
        userOnline = userOnline.filter(e=>{return e.socketid != socketid});
        console.log(userOnline);
    }
    io.on('connection', (socket) => {
        console.log("co nguoi ket noi"+socket.id);
        socket.join("test-room");
        socket.on('ok',()=>{
            console.log('ok',socket.id);
        })   //chua co chuc nang tao room nen cho dai vo room nay
        socket.on('challenge',()=>{
            console.log('challenge');
            socket.emit('challenge');
        })
        socket.on('login-user',(data)=>{
            if(!userOnline.find(e=> {return e.socketid===data.socketid||e.id===data.id})){
                userOnline.push(data);
                console.log(userOnline.length);
                
            }else{
                console.log('user exist');
                console.log(userOnline.length);
                socket.emit('user-exist');
            }
  
        })

        socket.on('logout-user',(data)=>{
            handleDisConnect(data.socketid);
        })

        socket.on('disconnect',()=>{
            handleDisConnect(socket.id);
        })
    })
    
}