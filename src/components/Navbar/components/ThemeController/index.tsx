import { useUnit } from "effector-react";

import { $theme } from "store";
import { themesList } from "constatnts";
import Root from "./components/Root";
import Activator from "./components/Activator";
import List from "./components/List";
import ListItem from "./components/ListItem";

const ThemeController = () => {
  const currentTheme = useUnit($theme);

  return (
    <Root>
      <Activator currentTheme={currentTheme} />

      <List>
        {themesList.map((theme, key) => (
          <ListItem key={key} theme={theme} currentTheme={currentTheme} />
        ))}
      </List>
    </Root>
  );
};

export default ThemeController;
