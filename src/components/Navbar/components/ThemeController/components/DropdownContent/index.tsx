import React from "react";

import { useUnit } from "effector-react";
import { $theme, setThemeFx } from 'store';

import { themesList } from "constatnts";

const DropdownContent = () => {
  const currentTheme = useUnit($theme);

  const onClick = (event: React.MouseEvent) => {
    setThemeFx((event.currentTarget.ariaLabel || '').toLowerCase())
  };

  return (
    <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
      {themesList.map(
        (theme, themeIndex) => {
          const className = theme.toLowerCase() !== currentTheme ?
            'theme-controller btn btn-sm btn-block btn-ghost justify-start' :
            'theme-controller btn btn-sm btn-block btn-primary justify-start';
          return (
            <li key={themeIndex}>
              <input
                type="radio"
                onClick={onClick}
                aria-label={theme}
                name="theme-dropdown"
                className={className}
                value={theme.toLowerCase()}
              />
            </li>
          );
        }
      )}
    </ul>
  );
};

export default DropdownContent;
