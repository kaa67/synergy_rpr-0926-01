import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => (
  <h1 className="text-2xl md:text-3xl font-medium mt-3">
    {children}
  </h1>
);

export default Header;
