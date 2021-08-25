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
    codeBlock: '#111b27',
    inlineCodeBlock: '#22364e',
  },
  code: {
    plain: '#e3eaf2',
    keyword: '#e9ae7e',
    comment: '#8da1b9',
    className: '#6cb8e6',
    class: '#c699e3',
    string: '#91d076',
    number: '#e6d37a',
    important: '#cd6660',
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
  code: {
    plain: '',
    keyword: '',
    comment: '',
    className: '',
    class: '',
    string: '',
    number: '',
    important: '',
  },
  ...breakpoints,
};
