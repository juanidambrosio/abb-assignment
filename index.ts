import mockedParts from "./data/parts.json";
import Part from "./models/Part";
import MeasurementsFactory from "./utils/measurementsFactory";
import PartsMapper from "./utils/partsMapper";
import dotenv from "dotenv";

dotenv.config();

let parts: Array<Part>;

const createParts = () => {
  const lastMeasurementsNumber = parseInt(process.env.MAX_MEASUREMENTS) || 10;
  const partsMapper = new PartsMapper();
  parts = partsMapper.createParts(mockedParts, lastMeasurementsNumber);
};

const run = () => {
  const measurementsFactory = new MeasurementsFactory();

  const timer: ReturnType<typeof setInterval> = setInterval(() => {
    parts.forEach((part) => {
      const measurements = measurementsFactory.createMeasurements(part);
      measurements.forEach((measurement) => {
        const { featureName, controlName, deviation, devOutTotal, color } =
          measurement;
        console.log(
          color,
          `Part ${part.name}, Feature ${featureName} Control ${controlName}, Deviation ${deviation}, DevTotal ${devOutTotal}`,
          "\x1b[0m"
        );
      });
    });
  }, 10000);
};

createParts();
run();
