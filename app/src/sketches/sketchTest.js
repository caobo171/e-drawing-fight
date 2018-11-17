import AI from "./aiService";
export default function sketchTest(p) {
  var ai;
  var word = "aaaaaa"; 
  var time = 15;
  var score = 0;
  p.setup = () => {
    ai = new AI(p);
    ai.start();
    p.createCanvas(400, 600);
    p.background("white");
  };
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if(props.text){
      word = props.text;
      time = props.time;
      let levelUp = props.levelUp; //console.log(props.levelUp);
      if(p.mouseIsPressed){
        //word = "rain";
        window.word = word;
        let prediction = ai.predict().names[0];
        prediction = prediction.replace(/\s/g,'');///bỏ khoảng trắng regular expression
        console.log(prediction);
        if (word === prediction) {
          console.log("correct"); 
          score++;
          setTimeout(()=>{
            p.background("white")
            //p.draw();
          },1000);
        }
      }
    }
  };
  p.draw = () => {
    p.strokeWeight(8);
    p.stroke("white");
    p.text(score, 15, 15);//hien thi diem so thu 
    p.stroke(0);
    if (p.mouseIsPressed) {
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    }
    if(time===0){
      p.background("white");
    };
  };
}
