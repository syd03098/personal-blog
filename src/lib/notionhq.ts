import { Client } from '@notionhq/client';
import {
  MultiSelectProperty,
  MultiSelectPropertyValue,
  RichTextPropertyValue,
  SinglePropertyFilter,
  TitlePropertyValue,
} from '@notionhq/client/build/src/api-types';
import { Post, PostTags } from '@lib/types';

interface Props {
  option?: SinglePropertyFilter;
}

export const notionhq = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN,
});

const isProduction = process.env.NODE_ENV === 'production';

export const getAllPublishedPosts = async ({ option }: Props = {}): Promise<
  Post[]
> => {
  const customFilter: SinglePropertyFilter[] = [
    isProduction
      ? {
          property: 'published',
          checkbox: {
            equals: true,
          },
        }
      : undefined,
    option,
  ];

  const { results } = await notionhq.databases.query({
    database_id: process.env.NOTION_PAGE_ID,
    filter: {
      and: [...customFilter.filter((filter) => filter !== undefined)],
    },
    sorts: [
      {
        property: 'created',
        direction: isProduction ? 'descending' : 'ascending',
      },
    ],
  });

  return results.map(({ id, properties }) => {
    const title = (properties.title as TitlePropertyValue).title?.[0];
    const summary = (properties.summary as RichTextPropertyValue)
      .rich_text?.[0];

    return {
      id,
      title: title ? title.plain_text : 'Untitled',
      summary: summary ? summary.plain_text : 'Unknown Post',
      tags: (properties.tags as MultiSelectPropertyValue).multi_select.map(
        ({ name }) => name,
      ),
    };
  });
};

export const getAllTagName = async (): Promise<string[]> => {
  const { properties } = await notionhq.databases.retrieve({
    database_id: process.env.NOTION_PAGE_ID,
  });
  return (properties.tags as MultiSelectProperty).multi_select.options.map(
    ({ name }) => name,
  );
};

export const getCountOfPostsFromTags = async (): Promise<PostTags[]> => {
  const tags = [...(await getAllPublishedPosts())]
    .map(({ tags: tagList }) => tagList)
    .flat(1);

  return Array.from(new Set(tags))
    .map((tagName) => {
      return { tagName, count: [...tags.filter((t) => t === tagName)].length };
    })
    .sort((a, b) => b.count - a.count);
};
