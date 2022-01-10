import { ImageBlock } from 'notion-types';

export function parseImageUrl(block: ImageBlock): {
  url: string;
  blurDataUrl: string;
} {
  const url = block.properties?.source?.[0]?.[0];
  const imageUrl = `https://www.notion.so/image/${encodeURIComponent(url)}`;

  const notionImageUrl = new URL(imageUrl);
  notionImageUrl.searchParams.set('table', 'block');
  notionImageUrl.searchParams.set('id', block.id);
  notionImageUrl.searchParams.set('cache', 'v2');

  return {
    url: notionImageUrl.toString(),
    blurDataUrl: `${notionImageUrl.toString()}&width=64`,
  };
}

export function getAltMessage(block: ImageBlock): string | undefined {
  const alt = block.properties?.caption?.[0];

  return alt ? alt.toString() : undefined;
}
