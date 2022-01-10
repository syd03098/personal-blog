export type TimeLabel =
  | 'years'
  | 'months'
  | 'days'
  | 'hours'
  | 'minutes'
  | 'just a minutes ago';

export interface TimeInterval {
  label: TimeLabel;
  seconds: number;
}
