import "./foundationSetting.css";
import SlabMode from "./modes/SlabMode";
import SelectFoundation from "./SelectFoundation";

const FoundationSetting = ({ foundationMode }) => {
  return (
    <div className="foundationSetting">
      <SelectFoundation />
      {foundationMode === "slab" && <SlabMode />}
    </div>
  );
};

export default FoundationSetting;
