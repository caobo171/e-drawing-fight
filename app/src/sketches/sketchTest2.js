import AI from "./aiService";
import io from "socket.io-client";
export default function sketchTest2(p) {
  var ai;
  var socket = null;
  var x;
  var y;
  var px;
  var py;
  p.setup = () => {
    ai = new AI(p);
    ai.start();
    p.createCanvas(400, 600);
    p.background("#ddd");
    socket = io("http://localhost:5000");
    socket.on("connect",()=>{
      console.log(socket.id);
    });
  };

  p.draw = () => {
    p.strokeWeight(8);
    p.stroke(0);
    if(px!=null && py!=null && x!=null && y!=null){
      console.log("drawing");
      p.line(px,py,x,y);
    }
    if(socket!=null){
      socket.on("server-send-drawing",(dataX,dataY)=>{
        if(x!=null){px=x;};
        if(y!=null){py=y;};
        x = dataX;
        y = dataY;
      })
    }
  }
}
