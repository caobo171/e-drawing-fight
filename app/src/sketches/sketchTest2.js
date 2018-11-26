import AI from "./aiService";
export default function sketchTest2(p) {
  var ai;
  var x; var px;
  var y; var py;
  var socket = null;
  p.setup = () => {
    ai = new AI(p);
    ai.start();
    var canvasDiv = document.getElementById('sketch1');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    p.createCanvas(width,height);
    p.background("#ddd");
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    socket = props.socket;
    if(socket){
      window.socket.on("server-send-drawing",(mousex,mousey,pmousex,pmousey)=>{ 
        if(true){
          px=pmousex;py=pmousey;
          x=mousex;y=mousey;
          p.stroke(0);
          p.line(px,py,x,y);
        }
      })

      window.socket.on("server-level-up",()=>{
        p.background('#ddd');
      })
    }
  }

  p.draw = () => {
  }
}
