import React from 'react';
import { ThemeProvider } from 'react-css-themr';

export const getTheme = theme => storyFn => {
  return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
};
