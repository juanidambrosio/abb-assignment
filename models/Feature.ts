import Control from "./Control";

class Feature {
  name: string;
  controls: Array<Control>;

  constructor(name: string, controls: Array<Control>) {
    this.name = name;
    this.controls = controls;
  }
}

export default Feature;
