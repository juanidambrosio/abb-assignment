import Control from "../models/Control";
import Feature from "../models/Feature";
import Part from "../models/Part";

class PartsMapper {
  createParts(parts: Array<any>, maxMeasurements: number) {
    return parts.map(
      (part) =>
        new Part(
          part.name,
          part.features.map(
            (feature) =>
              new Feature(
                feature.name,
                feature.controls.map(
                  (control) =>
                    new Control(
                      control.name,
                      control.expected,
                      control.mediumTolerance,
                      control.tolerance,
                      maxMeasurements
                    )
                )
              )
          )
        )
    );
  }
}

export default PartsMapper;
