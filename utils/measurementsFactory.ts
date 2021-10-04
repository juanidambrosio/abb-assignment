import Control from "../models/Control";
import MeasurementsOutput from "../models/MeasurementsOutput";
import Part from "../models/Part";

class MeasurementsFactory {
  createMeasurements(part: Part) {
    const measurements = [];
    part.features.forEach((feature) => {
      feature.controls.forEach((control) => {
        const randomNumber = this.generateRandomMeasurement(control);
        const { deviation, devOutTotal, color } = this.generateMeasurementStats(
          control,
          randomNumber
        );
        measurements.push(
          new MeasurementsOutput(
            feature.name,
            control.name,
            deviation,
            devOutTotal,
            color
          )
        );
      });
    });
    return measurements;
  }

  generateRandomMeasurement(control: Control) {
    const { expected, maxTolerance } = control;

    const rate = parseInt(process.env.RANDOM_FACTOR, 10) || 1;
    const randomRate = maxTolerance * rate;

    const randomNumber = parseFloat(
      (
        Math.random() * (expected + randomRate - (expected - randomRate)) +
        (expected - randomRate)
      ).toFixed(4)
    );
    return randomNumber;
  }

  getToleranceColor(
    deviation: Number,
    devOutTotal: Number,
    mediumTolerance: Number,
    maxTolerance: Number
  ) {
    return deviation >= maxTolerance || devOutTotal > 0
      ? "\x1b[31m"
      : deviation >= mediumTolerance
      ? "\x1b[33m"
      : "\x1b[32m";
  }

  generateMeasurementStats(control: Control, newMeasurement: number) {
    const {
      expected,
      mediumTolerance,
      maxTolerance,
      devOutToleranceMeasurements = [],
      maxMeasurements = 10,
    } = control;

    const deviation = parseFloat(
      (expected >= newMeasurement
        ? expected - newMeasurement
        : newMeasurement - expected
      ).toFixed(4)
    );

    const devOutTolerance =
      expected - maxTolerance > newMeasurement
        ? expected - maxTolerance - newMeasurement
        : expected + maxTolerance < newMeasurement
        ? newMeasurement - expected - maxTolerance
        : 0;

    devOutToleranceMeasurements.push(devOutTolerance);
    control.devOutToleranceMeasurements = devOutToleranceMeasurements;

    if (devOutToleranceMeasurements.length === maxMeasurements) {
      devOutToleranceMeasurements.splice(0, 1);
    }

    const devOutTotal = parseFloat(
      devOutToleranceMeasurements
        .reduce((acc, curr) => (acc = acc + curr))
        .toFixed(4)
    );

    const color = this.getToleranceColor(
      deviation,
      devOutTotal,
      mediumTolerance,
      maxTolerance
    );

    return { deviation, devOutTotal, color };
  }
}

export default MeasurementsFactory;
