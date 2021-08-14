import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import { getPageProperty } from 'notion-utils';
import { Post } from '@lib/types';

export const notion = new NotionAPI({ authToken: process.env.NOTION_TOKEN });

export const getPostDetail = async (
  pageId: string,
  recordMap: ExtendedRecordMap,
): Promise<Post> => {
  const block = recordMap.block[pageId].value;
  const tags = getPageProperty('tags', block, recordMap);
  return {
    title: getPageProperty('title', block, recordMap) || 'Untitled',
    summary: getPageProperty('summary', block, recordMap) || 'Unknown Post',
    createdAt: block.created_time,
    lastUpdatedAt: block.last_edited_time,
    tags: tags ? tags.split(',') : [],
  };
};
