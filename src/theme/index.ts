import { BreakPoints, StyledTheme } from '@theme/types';

const breakpoints: BreakPoints = {
  breakpoints: {
    mobile: '420px',
    tablet: '768px',
    laptop: '1024px',
  },
};

export const darkTheme: StyledTheme = {
  background: {
    main: '#0d1111',
  },
  text: {
    header: '#ededed',
    subHeader: '#e0e0e0',
    plain: '#dadada',
    smoke: '#838383',
  },
  border: {
    primary: '#474747',
  },
  palette: {
    emphasis: '#58a6ff',
    selection: '#40dbec',
    codeBlock: '#1a202a',
    inlineCodeBlock: '#343434',
  },
  ...breakpoints,
};

export const lightTheme: StyledTheme = {
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
    primary: '',
  },
  palette: {
    emphasis: '',
    selection: '',
    codeBlock: '',
    inlineCodeBlock: '',
  },
  ...breakpoints,
};
