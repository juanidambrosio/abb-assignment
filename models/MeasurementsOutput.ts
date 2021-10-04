class MeasurementsOutput {
  featureName: string;
  controlName: string;
  deviation: number;
  devOutTotal: number;
  color: string;

  constructor(
    featureName: string,
    controlName: string,
    deviation: number,
    devOutTotal: number,
    color: string
  ) {
    this.featureName = featureName;
    this.controlName = controlName;
    this.deviation = deviation;
    this.devOutTotal = devOutTotal;
    this.color = color;
  }
}

export default MeasurementsOutput;
