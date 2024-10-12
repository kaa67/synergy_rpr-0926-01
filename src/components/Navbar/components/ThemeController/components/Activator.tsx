type Props = {
  currentTheme: string;
};

const Activator = ({ currentTheme = 'Theme' }: Props) => (
  
  <div tabIndex={0} role="button" className="btn m-1">
    {currentTheme}
    <svg
      width="12px"
      height="12px"
      className="inline-block h-2 w-2 fill-current opacity-60"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048"
    >
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
);

export default Activator;
