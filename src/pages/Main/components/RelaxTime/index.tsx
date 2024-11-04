import SectionHeader from "components/SectionHeader";

import relax from "media/images/relax.png";
import relaxOrelly from "media/images/relax_orelly.png";

const RelaxTime = () => {
  return (
    <section>
      <SectionHeader>Отдых</SectionHeader>

      <div
        className="
          p-8
          text-base
          rounded-lg
          bg-base-200
          font-medium
          flex
          gap-2
          flex-col
          lg:flex-row
        "
      >
        <img
          src={relax}
          alt="Relax time"
          className="max-w-sm"
        />

        <div>
          <p>Все нормально, есть чем заняться, знаю как восстановиться</p>

          <p>
            Очень важный навык профессионала - выключать работу во время отдыха
          </p>

          <p>
            Сейчас есть ещё одно переключение из рабочих процессов - помогаю
            младшему сыну закончить физмат лицей. Суперзадачи, очень занятно
          </p>

          <p>
            Летом нравится автотуризм, грибы, неведомая глушь, морские просторы.
          </p>

          <p>
            Зимой нравится хвойный лес, мороз (в смысле, не слякоть!), шашлыки
            под снегопадом.
          </p>

          <p>
            Постоянно что-то почитываю, например сейчас настолка: O`Relly. Лука
            Меццалира «Создание микрофронтендов»
          </p>

          <p className="flex flex-row justify-center align-middle">
            <img
              src={relaxOrelly}
              alt="Relax time"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default RelaxTime;
