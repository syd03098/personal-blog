export type HeaderType = 'sm' | 'md' | 'lg';

export const typographyType: Readonly<
  Record<
    HeaderType,
    {
      fontSize: number;
      lineHeight: number;
    }
  >
> = {
  lg: {
    fontSize: 42,
    lineHeight: 1.4,
  },
  md: {
    fontSize: 36,
    lineHeight: 1.2,
  },
  sm: {
    fontSize: 24,
    lineHeight: 1.2,
  },
};
