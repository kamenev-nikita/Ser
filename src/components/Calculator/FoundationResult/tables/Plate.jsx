import MyTr from "./MyTr";

const Plate = ({ values }) => {
  const names = [
    "Периметр плиты",
    "Площадь подошвы плиты",
    "Площадь боковой поверхности",
    "Объем бетона",
    // "Вес бетона",
  ];

  // const units = ["м", "м2", "м2", "м3", "кг", "	кг/см2"];
  const units = ["м", "м2", "м2", "м3"];

  return (
    <>
      <p>Плита</p>
      <table className="table table-warning table-striped table-hover  plate">
        <tbody>
          {names.map((name, index) => {
            return (
              <MyTr
                key={index}
                name={name}
                value={values[index]}
                unit={units[index]}
              ></MyTr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Plate;
