import Header from "components/Header";
import SectionHeader from "components/SectionHeader";

const MyContacts = () => {
  return (
    <section>
      <Header>Контакты и обратная связь</Header>

      <p>Контактный телефон: +X XXX XXX XXXX</p>
      <p>Контактный email: mail@mail.mail</p>

      <p>Задайте мне вопрос, используя форму обратной связи</p>

      <SectionHeader>Форма обратной связи</SectionHeader>

      <div className="mockup-window bg-base-300 border">
        <form action="/" className="p-8">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Ваше имя</span>
            </div>
            <input
              type="text"
              placeholder="Представьтесь"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Ваш вопрос</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Задайте вопрос"
            ></textarea>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Куда отправить ответ</span>
            </div>
            <input
              type="text"
              placeholder="email, tel, etc..."
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <div className="flex flex-row gap-2 py-4">
            <button type="submit" className="btn btn-outline">
              Отправить
            </button>
            <button type="reset" className="btn btn-outline">
              Очистить поля
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MyContacts;
