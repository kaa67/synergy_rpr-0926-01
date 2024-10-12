import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { routes } from "components/Routing/routes";

const MainMenuItems = () => {
  const currentPath = useLocation().pathname;

  const preparedMenuItems = routes.map(
    ({ title, path }) => ({
      title,
      path,
    })
  );

  return (
    <>
      {preparedMenuItems.map(
        ({ title, path }, key) => {
          const aClassName = `whitespace-nowrap${
            currentPath === path ? ' active' : ''
          }`;

          return (
            <li key={key}>
              <Link className={aClassName} to={path}>
                {title}
              </Link>
            </li>
          );
        }
      )}
    </>
  );
};

export default MainMenuItems;
