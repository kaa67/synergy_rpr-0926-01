import { MouseEvent } from "react";

import { setThemeFx } from "store";

type Props = {
  theme: string;
  currentTheme: string;
};

const ListItem = ({ theme, currentTheme }: Props) => {
  const onSetTheme = (event: MouseEvent) => {
    setThemeFx((event.currentTarget.ariaLabel || "").toLowerCase());
  };
  const lowerCaseTheme = theme.toLowerCase();
  const btnStyle = lowerCaseTheme === currentTheme ? "btn-primary" : "btn-ghost" 
  const inputClassName = `theme-controller btn ${btnStyle} btn-sm btn-block justify-start`;

  return (
    <li>
      <input
        type="radio"
        aria-label={theme}
        onClick={onSetTheme}
        name="theme-dropdown"
        value={lowerCaseTheme}
        className={inputClassName}
      />
    </li>
  );
};

export default ListItem;
