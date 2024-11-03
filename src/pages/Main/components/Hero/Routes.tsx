import { useNavigate } from "react-router";

import { heroRoutes } from "utils/constants";

const Routes = () => {
  const navigate = useNavigate();

  const onClick = (route: string) => () => {
    navigate(route);
  };

  return (
    <div
      className="
          flex
          gap-x-1
          flex-full
          md:gap-x-2
          lg:gap-x-4
          justify-center
          lg:justify-start
        "
    >
      {heroRoutes.map(([route, caption], key) => (
        <button
          key={key}
          onClick={onClick(route)}
          className="btn btn-sm btn-outline"
        >
          {caption}
        </button>
      ))}
    </div>
  );
};

export default Routes;
