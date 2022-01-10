import { Post } from '@lib/types';
import {
  MultiSelectPropertyValue,
  Page,
  RichTextPropertyValue,
  TitlePropertyValue,
} from '@notionhq/client/build/src/api-types';

export function parsePostSummary({
  id,
  properties,
  last_edited_time,
  created_time,
}: Page): Post {
  const title = (properties?.title as TitlePropertyValue).title?.[0]
    ?.plain_text;
  const summary = (properties?.summary as RichTextPropertyValue).rich_text?.[0]
    ?.plain_text;
  const tags = (properties?.tags as MultiSelectPropertyValue).multi_select.map(
    ({ name }) => name,
  );
  const lastUpdatedAt = new Date(last_edited_time).getTime();
  const createdAt = new Date(created_time).getTime();

  return {
    id,
    title: title ?? 'Untitled',
    summary: summary ?? 'Unknown Posts',
    tags,
    lastUpdatedAt,
    createdAt,
  };
}

export default { parsePostSummary };
