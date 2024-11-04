import AboutWorkTime from "./components/AboutWorkTime";
import Hero from "./components/Hero";
import History from "./components/History";
import Hobby from "./components/Hobby";
import ProductTeamsIntro from "./components/ProductTeamsIntro";
import ProfessionalExperience from "./components/ProfessionalExperience";
import RelaxTime from "./components/RelaxTime";

const Main = () => (
  <section>
    <Hero />
    <ProfessionalExperience />
    <History />
    <ProductTeamsIntro />
    <AboutWorkTime />
    <RelaxTime />
    <Hobby />
  </section>
);

export default Main;
