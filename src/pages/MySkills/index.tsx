import Header from "components/Header";
import SectionHeader from "components/SectionHeader";

const MySkills = () => {
  return (
    <section>
      <Header>Мои компетенции</Header>

      <SectionHeader>
        Этими вещами пользуюсь регулярно и готов работать без подготовки
      </SectionHeader>

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
          HTML, CSS, Javascript, Typescript
        </p>

        <p>
          React, Redux(Boilerplate/Toolkit), Effector, Saga, Axios, Moment/fns-date, Socket.io
        </p>

        <p>
          Linux(Ubuntu), Node(npm, nvm), Git/Github/Gitlab, vim/neovim/VS Code
        </p>

        <p>
          Atlassian(Jira, Confluence, Tempo etc...), Bitrix24, Microsoft Teams
        </p>
      </div>

      <SectionHeader>
        Вещи с потерей компетенции
      </SectionHeader>

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
          PHP, Pascal, C/C++, asm
        </p>

        <p>
          Bootstrap, jquery, Codeigniter, Symfony
        </p>


        <p>
          1C
        </p>

      </div>


      <SectionHeader>
        Вещи в процессе изучения
      </SectionHeader>

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
          Next - Планирую применять в будущем
        </p>

        <p>
          Vue3 - планирую применять в будущем
        </p>

        <p>
          Angular - планирую применять в будущем
        </p>

        <p>
          Семейство STM32, Stm32CubeIDE, c/c++ - Есть несколько проектов, продолжаю изучение
        </p>

        <p>
          Golang - из-за потребности в микросервисном слое обмена данными микропроцессор - демон на ПК (по USB), затем демон ПК - сервер системы управления (Socket.io)
        </p>
      </div>
    </section>
  );
};

export default MySkills;
