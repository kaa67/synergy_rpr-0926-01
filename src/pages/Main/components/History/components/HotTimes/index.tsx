import SectionHeader from "components/SectionHeader";

import cairo from "media/images/hot_times/cairo.jpg";
import cairoWhois from "media/images/hot_times/cairo_whois.png";
import laspi from "media/images/hot_times/laspi.jpg";
import milkmama from "media/images/hot_times/milkmama.jpg";
import nout from "media/images/hot_times/nout.jpg";
import planeta from "media/images/hot_times/planeta.jpg";

const HotTimes = () => {
  return (
    <section>
      <SectionHeader>2003-2017 (Hot times). То ещё время</SectionHeader>

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
          Много работал. Написал около 50 сайтов и вебстраниц на стеке
          PHP/HTML/CSS
        </p>

        <p>
          То ещё было время! Но было здо'рово! Заканчивались браузерные войны
          (ослы плохо ишачили, л'исы и хромы росли, Опера продолжала хромать, на
          Сафари все шло не так, полумертвый фреймворк наседал на полуживой
          фреймворк, ну и конечно - легендарный Jquery всех умиротворял)
        </p>

        <p>
          Работал веб-мастером/devops группы компаний «Ласпи», обслуживая
          несколько сервисов, систему продажи туров, систему продажи авиа/жд
          перевозок, системы билетопечати, сайты-сателлиты маркетинговой группы
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center content-center">
          <img src={planeta} alt="planeta" />
          <img src={cairo} alt="Cairo khan" />
          <img src={laspi} alt="Laspi" />
          <img src={nout} alt="Nout" />
          <img src={milkmama} alt="Milkmama" />
        </div>

        <hr />
        <p>
          Ярким примером проектов того времени является сайт Каирского фестиваля
          <br />
          <img src={cairo} alt="Cairo khan" style={{ width: "16rem" }} />
          <a
            href="http://www.cairo-khan.com/"
            target="_blank"
            rel="noreferrer"
            title="Сайт каирского фестиваля"
            className="link"
          >
            Cairo Khan
          </a>
        </p>

        <p>
          Ему 10 лет
          <br />
          <img src={cairoWhois} alt="Cairo khan" style={{ width: "16rem" }} />
        </p>

        <p>
          Он уже адаптивный, но ещё не mobile first.
          <br />
          Построен на гребне волны того времени: Bootstrap3, на многочисленных
          плагинах и самом jquery, на молодом и дерзком Codeigniter2 (Backend)
          <br />
          Уже предприняты все действия по заметанию "бутстрапомании"
          <br />
          Глядя в html, вспоминаешь, что это было время битвы со старыми ишаками
          <br />
          <small>
            ...
            <br />
            meta http-equiv="X-UA-Compatible" content="IE=edge"
            <br />
            ...
            <br />
            [if lt IE 9]
            <br />
            script
            src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"
            <br />
            script
            src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"
            <br />
            [endif]
            <br />
            ...
            <br />
            [if lt IE 9]
            <br />
            ...
            <br />
            [if lt IE 9]
            <br />
            contact_form_IE9_placeholder_fix();
            <br />
            [endif]
          </small>
        </p>
      </div>
    </section>
  );
};

export default HotTimes;
