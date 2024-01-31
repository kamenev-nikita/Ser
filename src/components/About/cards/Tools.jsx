import { FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div className="card tools">
      <FaTools className="cardImg" />
      <div className="card-body">
        <h5 className="card-title">полезные инструменты для вас</h5>
        <p className="card-text">
          На нашем сайте мы подготовили для Вас полезную информацию,
          <span>
            {" "}
            <Link className="toolLinkCalc" to="/calc">
              калькуляторы
            </Link>
          </span>
          , рейтинги и прочие сервисы, которые помогут сделать правильный выбор
          - ко всем инструментам мы подходим с особой тщательностью и
          продуманностью, и Вы можете на них полагаться.
        </p>
      </div>
    </div>
  );
};

export default Tools;
