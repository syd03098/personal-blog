import { Theme } from '@theme/types';

export const darkTheme: Theme = {
  background: {
    main: '#111111',
  },
  text: {
    header: '#ededed',
    subHeader: '#e0e0e0',
    plain: '#dadada',
    smoke: '#838383',
  },
  border: {
    primary100: '#474747',
  },
  palette: {
    emphasis: '#58a6ff',
    selection: '#40dbec',
    codeBlock: '#1e2128',
    inlineCodeBlock: '#343434',
  },
};

export const lightTheme: Theme = {
  background: {
    main: '',
  },
  text: {
    header: '',
    subHeader: '',
    plain: '',
    smoke: '',
  },
  border: {
    primary100: '',
  },
  palette: {
    emphasis: '',
    selection: '',
    codeBlock: '',
    inlineCodeBlock: '',
  },
};
