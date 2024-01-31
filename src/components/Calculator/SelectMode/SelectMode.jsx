const SelectMode = ({ foundationMode, setFoundationMode }) => {
  return (
    <div className="selectMode">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(e) => setFoundationMode(e.target.value)}
      >
        <option value="slab" defaultValue>
          плитный фундамент
        </option>
        <option value="over" disabled>
          др варианты
        </option>
      </select>
    </div>
  );
};

export default SelectMode;
