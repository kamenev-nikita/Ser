import "./about.css";

import Comfort from "./cards/Comfort";
import Security from "./cards/Security";
import Range from "./cards/Range";
import Professionalism from "./cards/Professionalism";
import GoodPrices from "./cards/GoodPrices";
import Tools from "./cards/Tools";

const About = () => {
  return (
    <div className="about container">
      <h4>
        Компания продолжает свое развитие, ориентируясь на базовые принципы,
        которые являются нашими фундаментальными преимуществами:
      </h4>

      <div className="cards">
        <Comfort />
        <Security />
        <Range />
      </div>

      <h4>
        Мы профессионалы своего дела.
        <p>
          Мы разбираемся в том, что мы делаем, постоянно повышаем компетенцию
          наших специалистов и улучшаем бизнес-процессы внутри Компании.
        </p>
      </h4>

      <div className="cards">
        <Professionalism />
        <GoodPrices />
        <Tools />
      </div>
    </div>
  );
};

export default About;
