import SectionHeader from "components/SectionHeader";

import { professionalExperience } from "utils/constants";

const ProfessionalExperience = () => (
  <section>
    <SectionHeader>Тезисы по профессиональной деятельности</SectionHeader>

    <div
      className="
        grid
        grid-cols-1
        divide-y
        text-base
        rounded-lg
        bg-base-200
        font-medium
        divide-dashed
        divide-gray-200
        dark:divide-gray-600
      "
    >
      {professionalExperience.map((text, key) => (
        <div
          key={key}
          className="p-8">
          {text}
        </div>
      ))}
    </div>
  </section>
);

export default ProfessionalExperience;
