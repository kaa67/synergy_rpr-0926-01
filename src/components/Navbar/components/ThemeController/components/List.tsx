import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const List = ({ children }: Props) => {
  return (
    <ul
      tabIndex={0}
      className="dropdown-content
              bg-base-300
              rounded-box
              z-[1]
              w-auto
              p-2
              shadow-2xl
              right-0
              columns-4"
    >
      {children}
    </ul>
  );
};

export default List;
