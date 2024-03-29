import "./home.css";

import stage1 from "./imges/stage1.jpg";
import stage2 from "./imges/stage2.jpg";
import stage4 from "./imges/stage4.jpg";
import stage5 from "./imges/stage5.jpg";
import stage6 from "./imges/stage6.jpg";
import stage7 from "./imges/stage7.jpg";

const Home = () => {
  return (
    <div className="container home">
      <div className="head">
        <h4>Этапы строительства фундамента</h4>
        <div>
          <p>
            Крепкий надежный фундамент – залог долговечности любой постройки.
            Именно поэтому при закладке основания рекомендуется использовать
            только качественные материалы, соблюдать технологию и не пытаться
            сэкономить.
          </p>
        </div>
      </div>

      <div className="blockStageLeft">
        <p>
          1. Первый этап – можно сказать, теоретический. После
          инженерно-геологических исследований специалисты-проектировщики делают
          расчет фундамента и составляют проект. В нем дают рекомендации по
          выбору его типа, глубине заложения, подсчитывают все расходы.
          Некоторые застройщики игнорируют этот этап, и на свой страх и риск
          делают все на глазок, «как у соседа». Иногда это заканчивается
          проблемами уже после первой зимы.
        </p>
        <img src={stage1}></img>
      </div>
      <br></br>

      <div className="blockStageRight">
        <p>
          2. Определившись с типом основания, можно приступать к практическим
          работам: подготовке участка и разметке. Подготовительные работы
          включают снятие плодородного слоя и обеспечение нормальных подъездных
          путей для техники. Сложность разметки зависит от типа фундамента: у
          свайно-винтового и столбчатого достаточно наметить места расположения
          опор, для монолитной плиты обозначают границы застройки. Сложнее всего
          разметить ленточный фундамент: надо не только соблюсти размеры, но и
          выдержать прямоугольность. Особенно это важно при строительстве домов
          из готового набора из бруса или бревенчатого сруба.
        </p>
        <img src={stage2}></img>
      </div>

      <div className="blockStageLeft">
        <p>
          3. Объем земляных работ тоже зависит от типа основания дома. Для
          столбчатого достаточно пробурить скважину на 1,5 м (для каждой опоры),
          для монолитной плиты с подвалом требуется котлован, а для ленточного –
          траншея шириной 0,5 м и глубиной в зависимости от характеристик
          грунта. В южных регионах земля промерзает неглубоко, что позволяет
          значительно сократить глубину заложения.
        </p>
      </div>

      <div className="blockStageRight">
        <p>
          4. Устройство песчаной подушки обязательный этап для монолитных
          фундаментов: она ослабляет действие сил пучения.
        </p>
        <img src={stage4}></img>
      </div>

      <div className="blockStageLeft">
        <p>
          5. Сборка опалубки – последняя возможность исправить ошибки разметки.
          Щиты опалубки устанавливают вертикально, верхний край выставляют по
          уровню, щели закрывают рубероидом или пленкой.
        </p>
        <img src={stage5}></img>
      </div>

      <div className="blockStageRight">
        <p>
          6. Внутри опалубки вяжут арматурный каркас. Армирование –
          ответственный этап, от правильно расположенной арматуры зависит
          жесткость, крепость монолитных фундаментов.
        </p>
        <img src={stage6}></img>
      </div>

      <div className="blockStageLeft">
        <p>
          7. Заключительный этап – бетонирование – самый важный. Не только
          качество бетона определяет крепость конструкции, но и способ
          исполнения: важно залить фундамент за один прием. В этом случае не
          образуется швов между слоями бетона.
        </p>
        <img src={stage7}></img>
      </div>
    </div>
  );
};

export default Home;
