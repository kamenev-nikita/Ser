import { MdOutlineSecurity } from "react-icons/md";

const Security = () => {
  return (
    <div className="card security">
      <MdOutlineSecurity className="cardImg" />
      <div className="card-body">
        <h5 className="card-title">стабильность и безопасность</h5>
        <p className="card-text">
          Мы предоставляем гарантии стабильности и безопасности работы
        </p>
      </div>
    </div>
  );
};

export default Security;
