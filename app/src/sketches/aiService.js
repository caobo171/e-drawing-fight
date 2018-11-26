import * as tf from "@tensorflow/tfjs";
export default class AI {
  constructor(p) {
    this.p = p;
    this.classNames = [];
    this.model = {};
    this.len = 784;
    this.classPath = __dirname+"model2/class_names.txt";
    this.stringClasses = "";
  }

  readFile = () => {
    return new Promise((resolve, reject) => {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", this.classPath, false);
      //console.log('long', this.classPath);
      rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status === 0) {
           
            //console.log("long",rawFile.responseText)
            resolve(rawFile.responseText); 
          }
        }
      };
      rawFile.send(null);
    });
  };

  success(data) {
    //console.log(data);
    const lst = data.split(/\n/);
    for (var i = 0; i < lst.length - 1; i++) {
      let symbol = lst[i];
      this.classNames[i] = symbol;
    }
  }

  start = async () => {
    //arabic or english
    // mode = cur_mode;

    //load the model
    this.model = await tf.loadModel("model2/model.json");
    this.readFile().then(data => this.success(data));
    //this.success(this.stringClasses);
    console.log(this.model);

    //warm up
    this.model.predict(tf.zeros([1, 28, 28, 1])).print();
    if (this.model !== undefined && this.model !== null) {
      return true;
    } else return false;
  };
  preprocess = imgData => {
    return tf.tidy(() => {
      //convert to a tensor
      let tensor = tf.fromPixels(imgData, 1);

      //resize
      const resized = tf.image.resizeBilinear(tensor, [28, 28]).toFloat();

      //normalize
      const offset = tf.scalar(255.0);
      const normalized = tf.scalar(1.0).sub(resized.div(offset));

      //We add a dimension to get a batch shape
      const batched = normalized.expandDims(0);

      return batched;
    });
  };

  predict = () => {
    // let inputs = [];
    let img = this.p.get();

    img.resize(28, 28);
    img.loadPixels();
    // const pred = model.predict(preprocess(imgData)).dataSync();
    const pred = this.model.predict(this.preprocess(img.imageData)).dataSync();
    //console.log(pred);
    const indices = this.findIndicesOfMax(pred, 5);
    const probs = this.findTopValues(pred, 5);
    const names = this.getClassNames(indices);
    return { probs: probs, names: names };
  };

  findIndicesOfMax = (inp, count) => {
    var outp = [];
    for (var i = 0; i < inp.length; i++) {
      outp.push(i); // add index to output array
      if (outp.length > count) {
        outp.sort(function(a, b) {
          return inp[b] - inp[a];
        }); // descending sort the output array
        outp.pop(); // remove the last index (index of smallest element in output array)
      }
    }
    return outp;
  };

  /*
    find the top 5 predictions
    */
  findTopValues = (inp, count) => {
    var outp = [];
    let indices = this.findIndicesOfMax(inp, count);
    // show 5 greatest scores
    for (var i = 0; i < indices.length; i++) outp[i] = inp[indices[i]];
    return outp;
  };

  getClassNames = indices => {
    var outp = [];
    for (var i = 0; i < indices.length; i++)
      outp[i] = this.classNames[indices[i]];
    return outp;
  };
}
