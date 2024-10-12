export type Route = {
  title: string;
  path: string;
  component: () => JSX.Element;
  exact?: boolean;
  isMenuItem?: boolean;
};
