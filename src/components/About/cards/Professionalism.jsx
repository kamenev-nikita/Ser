import { FaBookBookmark } from "react-icons/fa6";

const Professionalism = () => {
  return (
    <div className="card professionalism">
      <FaBookBookmark className="cardImg" />
      <div className="card-body">
        <h5 className="card-title">опытные сотрудники</h5>
        <p className="card-text">
          Новые сотрудники, пришедшие в Компанию на должность специалиста по
          работе с клиентами, впервые общаются с клиентами не ранее, чем после
          3-х недель обучения, изучив более 200 страниц различных обучающих
          материалов и сдав двухступенчатую аттестацию.
        </p>
      </div>
    </div>
  );
};

export default Professionalism;
