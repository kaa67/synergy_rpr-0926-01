import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => (
  <h1 className="text-5xl font-bold text-center lg:text-left">
    {children}
  </h1>
);

export default Header;
