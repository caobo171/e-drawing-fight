import AI from "./aiService";
export default function sketchTest(p) {
  var ai;
  p.setup = () => {
    ai = new AI(p);
    ai.start();
    p.createCanvas(400, 600);
    p.background("blue");
  };
  p.draw = () => {
    p.strokeWeight(8);
    p.stroke(0);
    if (p.mouseIsPressed) {
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    }
  };
  p.mousePressed = () => {
    console.log(ai.predict());
  };
}
