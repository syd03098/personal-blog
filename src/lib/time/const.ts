import { TimeInterval } from '@lib/time/types';

export const timeIntervals: TimeInterval[] = [
  { label: 'years', seconds: 31536000 },
  { label: 'months', seconds: 2592000 },
  { label: 'days', seconds: 86400 },
  { label: 'hours', seconds: 3600 },
  { label: 'minutes', seconds: 60 },
  { label: 'just a minutes ago', seconds: 1 },
];

export default timeIntervals;
