import "./calculator.css";
import FoundationSetting from "./foundationSetting/FoundationSetting";

import { useState } from "react";
import SelectMode from "./SelectMode/SelectMode";
import VisualImg from "./VisualImg/VisualImg";
import FoundationResult from "./FoundationResult/FoundationResult";

const Calculator = () => {
  const [foundationMode, setFoundationMode] = useState("slab");
  // slab - плитный

  const [foundationType, setFoundationType] = useState("frame");
  // frame - полый квадрат \

  const [values, setValues] = useState([]);
  const [isShowResult, setIsShowResult] = useState(false);

  const concreteGradeInfo = {
    M100: { strength: 98 },
    M150: { strength: 131 },
    M200: { strength: 164 },
    M250: { strength: 196 },
    M300: { strength: 262 },
    M350: { strength: 327 },
    M400: { strength: 393 },
    M450: { strength: 458 },
    M500: { strength: 523 },
    M550: { strength: 554 },
    M600: { strength: 589 },
    M700: { strength: 720 },
    M800: { strength: 785 },
  };

  const countResult = (e) => {
    const values = []; // for place
    const inputs = document.querySelectorAll('input[type="number"]');

    const perimeter = (inputs[0].value * 2 + inputs[1].value * 2) / 1000;
    const squareButton = (inputs[0].value * inputs[1].value) / 1000000;
    const lateralSurfaceArea =
      ((inputs[0].value + inputs[2].value) * 2 +
        (inputs[1].value + inputs[2].value) * 2) /
      1000000;
    const volumeOfConcrete =
      (inputs[0].value * inputs[1].value * inputs[2].value) / 1000000000;
    // const concreteWeight = 98 * volumeOfConcrete * 1000; // зависит от марки

    // порядок важен
    values.push(perimeter);
    values.push(squareButton);
    values.push(lateralSurfaceArea);
    values.push(volumeOfConcrete);
    // values.push(concreteWeight);

    setValues(values);

    setIsShowResult(true);
    console.log("+");
  };

  return (
    <div className="calculator container">
      <SelectMode
        foundationMode={foundationMode}
        setFoundationMode={setFoundationMode}
      />
      <FoundationSetting foundationMode={foundationMode} />
      <VisualImg foundationMode={foundationMode} />
      <button
        onClick={(e) => countResult(e)}
        className="btn btn-danger"
        style={{ marginLeft: "40%", marginTop: "12px" }}
      >
        Расчитать
      </button>
      {isShowResult && <FoundationResult values={values} />}
    </div>
  );
};

export default Calculator;
