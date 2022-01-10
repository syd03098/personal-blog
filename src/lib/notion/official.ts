import { parsePostSummary } from '@lib/notion/utils';
import { PostSummary, Tag } from '@lib/types';
import { Client } from '@notionhq/client/build/src';
import {
  CheckboxPropertyValue,
  Filter,
  MultiSelectFilter,
  MultiSelectProperty,
} from '@notionhq/client/build/src/api-types';

export const notionClient = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN,
});

const isProduction = process.env.NODE_ENV === 'production';

export async function getPublishedPosts(
  multiSelectFilter?: MultiSelectFilter,
): Promise<PostSummary[]> {
  const list: Filter[] = [
    {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
  ];

  if (!isProduction) {
    list.pop();
  }

  if (multiSelectFilter) {
    list.push(multiSelectFilter);
  }

  const { results } = await notionClient.databases.query({
    database_id: process.env.NOTION_PAGE_ID,
    filter: {
      and: [...list],
    },
    sorts: [
      {
        property: 'created',
        direction: isProduction ? 'descending' : 'ascending',
      },
    ],
  });

  return results.map((result) => {
    const { id, title, summary, tags } = parsePostSummary(result);

    return {
      id,
      title,
      summary,
      tags,
    };
  });
}

export async function getPostSummary(postId: string) {
  const response = await notionClient.pages.retrieve({
    page_id: postId,
  });

  const isPublished = (response.properties?.published as CheckboxPropertyValue)
    .checkbox;

  if (!isPublished && isProduction) {
    throw Error();
  }

  return parsePostSummary(response);
}

export async function getCategories(): Promise<(string | undefined)[]> {
  const { properties } = await notionClient.databases.retrieve({
    database_id: process.env.NOTION_PAGE_ID,
  });

  return (properties?.tags as MultiSelectProperty).multi_select.options.map(
    (option) => option.name,
  );
}

export async function getAllPostsWithTag(): Promise<Tag[]> {
  const validTags = [...(await getPublishedPosts())]
    .map((post) => post.tags)
    .flat(1);

  return Array.from(new Set(validTags))
    .map((name) => {
      return {
        label: name,
        count: [...validTags.filter((t) => t === name)].length,
      };
    })
    .sort((a, b) => b.count - a.count);
}
