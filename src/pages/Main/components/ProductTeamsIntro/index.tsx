import { useNavigate } from "react-router";

import SectionHeader from "components/SectionHeader";

const ProductTeamsIntro = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/projects');
  };

  return (
    <section>
      <SectionHeader>О работе в проектно-продуктовых командах</SectionHeader>

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
          Об этом расскажу подробнее на странице &laquo;Мои проекты&raquo;
        </p>

        <button
          onClick={onClick}
          className="btn btn-sm btn-outline"
        >
          Мои проекты
        </button>
      </div>
    </section>
  );
};

export default ProductTeamsIntro;
