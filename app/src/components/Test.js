import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import sketchTest from "../sketches/sketchTest";

class Test extends Component {
  render() {
    return <P5Wrapper sketch={sketchTest} />;
  }
}

export default Test;
