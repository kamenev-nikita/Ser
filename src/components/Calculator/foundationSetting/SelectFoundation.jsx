const SelectFoundation = () => {
  return (
    <div className="selectFoundation">
      <span>Марка битона</span>
      <select className="form-select" aria-label="Default select example">
        <option value="M100">M100 (B7.5)</option>
        <option value="M150">M150 (B10)</option>
        <option value="M200">M200 (B15)</option>
        <option value="M250">M250 (B20)</option>
        <option value="M300">M300 (B22.5)</option>
        <option value="M350">M350 (B25)</option>
        <option value="M400">M400 (B30)</option>
        <option value="M450">M450 (B35)</option>
        <option value="M500">M500 (B40)</option>
        <option value="M550">M550 (B45)</option>
        <option value="M600">M600 (B50)</option>
        <option value="M700">M700 (B55)</option>
        <option value="M800">M800 (B60)</option>
      </select>
    </div>
  );
};

export default SelectFoundation;
