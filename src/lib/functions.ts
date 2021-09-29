import { ImageBlock } from 'notion-types';
import { timeIntervals } from '@lib/const';

export const parseImageUrl = (block: ImageBlock): string => {
  const imageUrl = `https://www.notion.so/image/${encodeURIComponent(
    block.properties.source?.[0]?.[0],
  )}`;
  const notionImageUrl = new URL(imageUrl);
  notionImageUrl.searchParams.set('table', 'block');
  notionImageUrl.searchParams.set('id', block.id);
  notionImageUrl.searchParams.set('cache', 'v2');
  return notionImageUrl.toString();
};

export const parsePublishedTime = (date: number): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

export const parseTimeFromNow = (date: number): string => {
  const seconds = Math.floor((Date.now() - date) / 1000);
  const interval = timeIntervals.find((value) => value.seconds < seconds);
  const count = Math.floor(seconds / interval.seconds);

  switch (interval.label) {
    case 'just a minutes ago':
      return `${interval.label}`;
    default:
      return `${count} ${interval.label} ago`;
  }
};
