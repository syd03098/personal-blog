import { TimeInterval } from '@lib/types';

export const timeIntervals: TimeInterval[] = [
  { label: 'year', seconds: 31536000 },
  { label: 'month', seconds: 2592000 },
  { label: 'day', seconds: 86400 },
  { label: 'hour', seconds: 3600 },
  { label: 'minutes', seconds: 60 },
  { label: 'just a minutes ago', seconds: 1 },
];

export default timeIntervals;
