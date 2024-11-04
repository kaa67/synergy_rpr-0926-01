import SectionHeader from "components/SectionHeader";

import hobby from "media/images/hobby.png";

const Hobby = () => {
  return (
    <section>
      <SectionHeader>Хобби</SectionHeader>

      <div
        className="
          p-8
          text-base
          rounded-lg
          bg-base-200
          font-medium
          gap-2
          flex
          flex-col
          lg:flex-row-reverse
        "
      >
        <img
          src={hobby}
          alt="First blood"
          className="max-w-sm rounded-lg grow-0"
        />

        <div className="grow">
          <p>Увлечения есть.</p>

          <p>
            Из самых залипательных это Микроконтроллеры.
            <br />
            Увлекаюсь этим больше 20 лет.
          </p>

          <p>
            Был успешный опыт создания ассемблера под камень КМ1816 ВЕ48,
            <br />
            (МК в 2000г можно было купить на «Горбушке» в Москве по цене 5р за
            камень)
          </p>

          <p>
            Сейчас мой фаворит — STM32 с операционной системой реального времени
            на борту
            <br />
            (FreeRTOS)
          </p>

          <p>
            Из последних активностей - участие в разработке смартсигнализации.
          </p>

          <p>
            Cейчас консультирую команду разработки медицинского манипулятора
            <br />
            по связи МК с ПК.
            <br />
            Планирую написать сервис обмена данными на Golang
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hobby;
