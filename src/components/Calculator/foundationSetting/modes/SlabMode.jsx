const SlabMode = () => {
  return (
    <div className="slabMode">
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Ширина плиты А (мм)
        </span>
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        ></input>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Длинна плиты B (мм)
        </span>
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        ></input>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Высота плиты C (мм)
        </span>
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        ></input>
      </div>
    </div>
  );
};

export default SlabMode;
