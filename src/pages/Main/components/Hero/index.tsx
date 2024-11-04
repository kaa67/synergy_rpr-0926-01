import { fullName } from "utils/constants";

import Header from "components/Header";
import SubHeader from "components/SubHeader";
import Routes from "./Routes";
import XFile from "./XFile";

const Hero = () => (
  <div className="hero bg-base-200 hero-extension rounded lg:rounded-lg">
    <div className="hero-content flex-col lg:flex-row">
      <XFile />

      <div>
        <Header>Портфолио</Header>
        <SubHeader>{fullName}</SubHeader>

        <p className="py-6 text-center lg:text-left">
          Разработчик современных веб-приложений с высокой степенью
          адаптивности, кроссбраузерности, отказоустойчивости, безопасности
        </p>

        <Routes />
      </div>
    </div>
  </div>
);

export default Hero;
