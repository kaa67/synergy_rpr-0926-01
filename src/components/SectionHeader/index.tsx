import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SectionHeader = ({ children }: Props) => (
  <h3 className="text-3xl text-center lg:text-left px-8 pt-16 pb-4">
    {children}
  </h3>
);

export default SectionHeader;
