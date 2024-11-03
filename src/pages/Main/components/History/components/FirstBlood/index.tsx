import SectionHeader from "components/SectionHeader";

import firstBlood from 'media/images/first_blood.jpg';

const FirstBlood = () => {
  return (
    <section>
      <SectionHeader>2000-2003гг. First blood. Первый проект</SectionHeader>

      <div
        className="
          p-8
          text-base
          rounded-lg
          bg-base-200
          font-medium
          flex
          flex-col
          lg:flex-row-reverse
        "
      >
        <img
          src={firstBlood}
          alt="First blood"
          className="max-w-sm rounded-lg shadow-2xl"
        />

        <div>
          <p>Начал изучать построение веб-страниц в 2000 году.</p>

          <p>
            Первая страница была опубликована на сервисе narod.ru, а создана в
            Microsoft Word (Save as HTML).
          </p>

          <p>
            Примечательно, что IE6 не мог показывать страницу, сделанную в их же
            Ворде, Microsoft раздавала утилиту, которая правила их косяки.
          </p>

          <p>
            И только в 2002 году я нашёл учителя, показавшего путь к правде (И
            верстке для IE6!!!). И переверстал её в чистом HTML/CSS
          </p>

          <p>
            Страница до сих пор жива, хотя доступа к управлению нет.
            <br />
            <br />
            Ей 24 года
            <br />
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              title="My first blood"
              href="http://vyvoz.narod.ru"
              className="link link-error"
            >
              Мой первый проект (My first blood)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstBlood;
