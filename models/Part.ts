import Feature from "./Feature";

class Part {
  name: String;
  features: Array<Feature>;

  constructor(name: String, features: Array<Feature>) {
    this.name = name;
    this.features = features;
  }
}

export default Part;
