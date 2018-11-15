import AI from "./aiService";
export default function sketchTest2(p) {
  var ai;
  p.setup = () => {
    ai = new AI(p);
    ai.start();
    p.createCanvas(400, 600);
    p.background("#ddd");
  };
}
