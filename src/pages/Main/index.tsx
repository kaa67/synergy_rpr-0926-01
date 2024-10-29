import { useNavigate } from "react-router-dom";

import Header from "components/Header";
import { fullName } from "./constants";

import imgKaa from "media/images/kaa67_520_520.jpeg";

const Main = () => {
  const navigate = useNavigate();

  const onClick = (route: string) => () => {
    navigate(route);
  };

  return (
    <>
      <Header>{fullName}</Header>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={imgKaa} alt={fullName} />
        </figure>
        <div className="card-body">
          <h1 className="card-title">Инженер фронтенда</h1>
          <p>
            Разработка современных веб-приложений с высокой степенью
            адаптивности, кроссбраузерности, отказоустойчивости, безопасности
          </p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={onClick('/projects')}>
              Участвовал в проектах
            </button>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={onClick('/skills')}>
              Скилы по стеку и технологиям
            </button>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={onClick('/contacts')}>
              Callback
            </button>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={onClick('/job')}>
              Зачем это нужно?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
