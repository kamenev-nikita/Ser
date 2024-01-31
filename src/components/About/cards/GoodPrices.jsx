import { GiPriceTag } from "react-icons/gi";

const GoodPrices = () => {
  return (
    <div className="card goodPrices">
      <GiPriceTag className="cardImg" />
      <div className="card-body">
        <h5 className="card-title">лучшие цены</h5>
        <p className="card-text">
          Мы постоянно наращиваем объемы поставок строительных материалов по
          всем направлениям, что обеспечивает лучшие отпускные цены от
          производителей в адрес нашей компании, и, соответственно, лучшие цены
          для наших клиентов.
        </p>
      </div>
    </div>
  );
};

export default GoodPrices;
