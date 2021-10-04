class Control {
  name: string;
  expected: number;
  mediumTolerance: number;
  maxTolerance: number;
  maxMeasurements: number;
  devOutToleranceMeasurements: Array<number>;

  constructor(
    name: string,
    expected: number,
    mediumTolerance: number,
    tolerance: number,
    maxMeasurements: number
  ) {
    this.name = name;
    this.expected = expected;
    this.mediumTolerance = mediumTolerance;
    this.maxTolerance = tolerance;
    this.maxMeasurements = maxMeasurements;
  }
}

export default Control;
