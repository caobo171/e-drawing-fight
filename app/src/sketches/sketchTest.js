import AI from "./aiService";
export default function sketchTest(p) {
  var ai;
  var word = "rain"; 
  var time = 15;
  var socket = null;
  var levelUp = null;
  var roomId;

  p.setup = () => {
    var canvasDiv = document.getElementById('sketch1');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    p.createCanvas(width,height);
    ai = new AI(p);
    ai.start();
    //p.createCanvas(400, 600);
    p.background("white");
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    word = props.text;
    time = props.time;
    levelUp = props.levelUp;
    socket = props.socket;
    roomId = props.roomId;
  };
  p.draw = () => {
    if(time===0){
      p.background("white");
    };
  };

  let sendMouse = ()=>{
    if(socket){
      socket.emit("client-send-drawing",p.mouseX,p.mouseY,p.pmouseX,p.pmouseY,roomId);
    }
  }

  p.mouseDragged = () =>{
    p.stroke(0);
    p.line(p.pmouseX, p.pmouseY,p.mouseX,p.mouseY);
    sendMouse();
    // let prediction = ai.predict().names[0];
    // prediction = prediction.replace(/\s/g,'');///bỏ khoảng trắng regular expression
    // console.log(prediction);
    // if (word === prediction) {
    //   console.log("correct");
    //   setTimeout(()=>{
    //     p.background("white");
    //     levelUp();
    //     console.log("long eofanasn")
    //   },1000);
    // }
  };
}