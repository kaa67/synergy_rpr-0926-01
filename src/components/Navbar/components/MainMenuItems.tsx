import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { routes } from "components/Routing/routes";
import { MouseEvent } from "react";

const MainMenuItems = () => {
  const currentPath = useLocation().pathname;

  const preparedMenuItems = routes.map(
    ({ title, path }) => ({
      title,
      path,
    })
  );

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo({ top: 0 });
    event.currentTarget.blur()
  };

  return (
    <>
      {preparedMenuItems.map(
        ({ title, path }, key) => {
          const aClassName = `whitespace-nowrap${
            currentPath === path ? ' active' : ''
          }`;

          return (
            <li key={key}>
              <Link onClick={onClick} className={aClassName} to={path}>
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
