export interface Theme {
  background: {
    main: string;
  };
  text: {
    header: string;
    subHeader: string;
    plain: string;
    smoke: string;
  };
  border: {
    primary: string;
  };
  palette: {
    emphasis: string;
    selection: string;
    codeBlock: string;
    inlineCodeBlock: string;
  };
  code: {
    plain: string;
    keyword: string;
    comment: string;
    className: string;
    class: string;
    string: string;
    number: string;
    important: string;
  };
}

export interface BreakPoints {
  breakpoints: {
    mobile: string;
    tablet: string;
    laptop: string;
  };
}

export type StyledTheme = BreakPoints & Theme;
