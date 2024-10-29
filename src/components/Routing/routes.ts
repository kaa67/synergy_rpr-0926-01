import Job from "pages/Job";
import Main from "pages/Main";
import MyContacts from "pages/MyContacts";
import MyProjects from "pages/MyProjects";
import MySkills from "pages/MySkills";

import { Route } from "types";

export const routes: Route[] = [
  {
    title: 'Главная',
    path: '/main',
    component: Main,
  },
  {
    title: 'Проекты',
    path: '/projects',
    component: MyProjects,
  },
  {
    title: 'Навыки',
    path: '/skills',
    component: MySkills,
  },
  {
    title: 'Контакты',
    path: '/contacts',
    component: MyContacts,
  },
  {
    title: 'Задание',
    path: '/job',
    component: Job,
  },
];
