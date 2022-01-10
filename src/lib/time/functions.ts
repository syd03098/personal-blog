import timeIntervals from '@lib/time/const';

export const parsePublishedTime = (date: number): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

export const parseTimeFromNow = (date: number): string | undefined => {
  const seconds = Math.floor((Date.now() - date) / 1000);
  const interval = timeIntervals.find((value) => value.seconds < seconds);

  if (!interval) {
    return undefined;
  }

  switch (interval.label) {
    case 'just a minutes ago':
      return `${interval.label}`;
    default:
      return `${Math.floor(seconds / interval.seconds)} ${interval.label} ago`;
  }
};
