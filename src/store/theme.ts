import { createEffect, createStore } from 'effector';

const initTheme = (defaultTheme: string = 'retro'): string => {
  const theme = localStorage.getItem('theme') || defaultTheme;
  setTheme(theme);

  return theme;
};

const setTheme = (theme: string): string => {
  localStorage.setItem('theme', theme);
  document.querySelector('html')?.setAttribute('data-theme', theme);

  return theme;
};

// Effect
export const setThemeFx = createEffect(setTheme);

// Store
export const $theme = createStore(initTheme())
  .on(setThemeFx.doneData, (_, theme) => {
    console.log('store setThemeFx.doneData', theme);
    return theme;
  });
