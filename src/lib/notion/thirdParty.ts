import { NotionAPI } from 'notion-client';

export const notion = new NotionAPI({ authToken: process.env.NOTION_TOKEN });

export default { notion };
