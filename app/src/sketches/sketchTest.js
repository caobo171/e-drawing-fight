import AI from "./aiService";
export default function sketchTest(p) {
  var ai;
  var word;
  p.setup = () => {
    ai = new AI(p);
    ai.start();
    p.createCanvas(400, 600);
    p.background("white");
  };
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.text){
      word = props.text;
      console.log(word);
    }
  };
  p.draw = () => {
    p.strokeWeight(8);
    p.stroke("white");
    p.text("10",20,20);//hien thi diem so
    p.stroke(0);
    if (p.mouseIsPressed) {
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    }
  };
  p.mousePressed = () => {
    console.log(ai.predict());
  };
}
