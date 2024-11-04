import SectionHeader from "components/SectionHeader";

import tempted from 'media/images/work_time.png';

const AboutWorkTime = () => (
  <section>
    <SectionHeader>Наши дни. Рабочее время</SectionHeader>

    <div
      className="
    p-8
    text-base
    rounded-lg
    bg-base-200
    font-medium
  "
    >
      <p>
        Рабочее время... какое оно? Как его описать? 
      </p>

      <p>
        Оно расписано иногда поминутно.
        <br />
        Часть его носит регулярный характер, а часть - 
        <br />
        это творчество, поиск пути, прогоны и испытания.
        <br />
        Победа? Тогда идем дальше.
        <br />
        Фиаско? Прими достойно - это путь Самурая.
        <br />
        Если выжил — продолжи путь!
        <br />
        А чем мы занимаемся? Какие ценности и кому творим?
      </p>

      <p>
        Ковид переместил огромное количество специалистов из офиса домой.
      </p>

      <p>
        И я знаю точно: многие к этому оказались не готовы, многие не умеют работать удаленно, многие не понимают, что с этим делать, у многих рабочее место по разным причинам не готово быть домашним офисом.
      </p>

      <p>
        Кратко расскажу (так меня учили на тренингах), как я работаю удаленно:
      </p>

      <ul className="list-disc list-outside">
        <li className="py-1">
          Все рабочее время я одет и выгляжу так, как будто бы я нахожусь в нормальном офисе, где ко мне и моему внешнему виду претензий не будет
        </li>
        
        <li className="py-1">
          В любых видах видеосвязи я включаю камеру, потому что это проявление уважения к коллегам, плюс: руководитель видит, что я в порядке, здоровье в норме, готов работать
        </li>

        <li className="py-1">
          Фон за спиной нейтральный, никаких намеков на пристрастия, увлечения, фобии, религии
        </li>

        <li className="py-1">
          Сдержанный тон беседы, контроль эмоций, речь только по делу
        </li>

        <li className="py-1">
          Я постоянно готов в нужной глубине рассказать о своих задачах и их статусе и прогрессе
        </li>

        <li className="py-1">
          При появлении стоп-факторов сразу контачу с руководителем, рассказываю о проблеме, запускаю механизмы, позволяющие принять корректировки планов как можно раньше
        </li>

        <li className="py-1">
          По факту возникновения новой, особенно неожиданной новой задачи - всегда требую пересчитать времена исполнения и/или приоритеты задач, которые были мне поставлены ранее
        </li>
      </ul>

      <p>
        Последний пункт очень актуален, т.к. именно он является причиной возникновения так называемого "выгорания", молодежный термин, которым описывается стресс от постоянной нагрузки, которую специалист пытается вытаскивать.
      </p>

      <p>
        Иногда "выгорание" путают со стрессом, связанным с недостаточным уровнем компетенций. Но это разные случаи. И в любом случае - руководитель должен быть оповещен о том, что круг задач вышел за психологический край специалиста.
      </p>

      <p>
        О соблазнах удаленной работы
      </p>

      <p className="flex flex-row align-middle">
        <img 
          src={tempted}
          style={{ width: '500px' }}
          alt="Tempted"
          className="rounded-lg shadow-2xl"
        />
      </p>

      <p>
        Что вы как профессионал делаете на работе: за вознаграждение выполняете задачи вовремя и качественно.
      </p>

      <p>
        При этом, руководитель знает, где вы, чем заняты, чем планируете заняться.
      </p>

      <p>
        При этом, коллеги, с которыми вы взаимодействуете, получают от вас все вовремя и в надлежащем качестве.
      </p>

      <p>
        Чтобы профессионально выполнять свои обязанности - вы должны исключить из рабочего времени все соблазны, которые присущи уаленной работе
        <br />
        Иначе вы будете работать много и сгорите
        <br />
        Или будете работать мало и перестанете делать работу в срок и качественно
        <br />
        Или будете признаны несоответствующим занимаемой должности
      </p>
    </div>
  </section>
);

export default AboutWorkTime;
