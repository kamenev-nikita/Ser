import "./VisualImg.css";

import slabImg from "./img/slabABC.jpg";

const VisualImg = ({ foundationMode }) => {
  return (
    <div className="visualImg">
      {foundationMode === "slab" && <img src={slabImg}></img>}
    </div>
  );
};

export default VisualImg;
