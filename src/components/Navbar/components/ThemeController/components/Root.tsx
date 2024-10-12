import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Root = ({ children }: Props) => {
  return (
    <div className="dropdown">
      {children}
    </div>
  );
};

export default Root;
