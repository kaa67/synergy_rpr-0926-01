import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SubHeader = ({ children }: Props) => (
  <h3 className="text-3xl text-center lg:text-left">
    {children}
  </h3>
);

export default SubHeader;
