import Header from "components/Header";

import gav from "media/images/job/gav.png";
import calc from "media/images/job/calc.png";

const Job = () => {
  return (
    <>
      <Header>Это портфолио - экзамен</Header>

      <p>
        Работа была всегда и до портфолио руки не доходили. все по стандарту,
        сапожник без сапог.
      </p>

      <p>
        И тут я зашел на переподготовку, верстка и яваскипт, было интересно,
        много веселых заданий, например:
      </p>

      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="flex flex-row gap-4">
          <a
              target="_blank"
              rel="noreferrer"
              className="link"
              title="Мама выгуливает щенков на осеннем пейзаже"
              href="https://group2.kolosoft.ru"
            >
            <img src={gav} alt="Гав-гав!" className="rounded-lg shadow" />
          </a>

          <div>
            CSS3 тренинг
            <br />
            html/css/vanillaJs
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <a
              target="_blank"
              rel="noreferrer"
              className="link"
              title="Чё калькулятор"
              href="https://calc.kolosoft.ru"
            >
            <img src={calc} alt="Чё калькулятор" className="rounded-lg shadow" />
          </a>

          <div>
            Vue3 тренинг
            <br />
            +Bootstrap5
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              className="link"
              href="https://github.com/kaa67/calc"
            >
              Repository
            </a>
          </div>
        </div>
      </div>

      <p>
        И вдруг раз, и на моих курсах экзамен: написать портфолио. Вот так и
        родилось.
      </p>

      <p>Делал с энтузиазмом, как же, теперь и у меня будет! Ура!</p>

      <p>
        В связи с хардкорным дедлайном написать на кастоме не выйдет, значит -
        конструктор:
      </p>

      <p>
        CRA/Typescript, Tailwind/DaizyUI, Effector... &nbsp;
        <a
          target="_blank"
          rel="noreferrer"
          className="link"
          href="https://github.com/kaa67/synergy_rpr-0926-01"
        >
          Repository
        </a>
      </p>

      <p>
        Тему стилей выбрать не смог, оставляю чейнджер тем в верхнем меню, на
        вкус и цвет товарища нет!
      </p>

      <p>
        Я - слушатель Колосов Андрей Алексеевич
        <br />
        © Synergy Learning System 2024
        <br />
        Группа: РПР-0926-01 (26.09.2024-06.11.2024)
        <br />
        Преподаватель курса: Стоян Евгений
      </p>

      <p>
        P.S.:
        <br />
        <small>04.11.2024г.</small>
        <br />
        На днях экзамен, уух!
        <br />
        Пожелайте ни пуха ни пера!
      </p>
    </>
  );
};

export default Job;
