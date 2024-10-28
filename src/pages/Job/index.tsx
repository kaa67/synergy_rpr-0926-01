import Header from "components/Header";

const Job = () => {
  return (
    <>
      <Header>Итоговое задание</Header>

      <p>Колосов Андрей Алексеевич</p>

      <p>Группа: РПР-0926-01</p>

      <p>Время проведения: 26.09.2024 - 06.11.2024</p>

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="1. Техническое задание"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          1. Техническое задание
          <br />
          Ссылка на
          &nbsp;
          <a className="link link-primary" href="https://github.com/kaa67/synergy_rpr-0926-01">Rep</a>
          &nbsp;
          проекта
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="2. Анализ"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          2. Анализ
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="3. Планирование"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          3. Планирование
        </div>
      </div>
    </>
  );
};

export default Job;
