export interface Post {
  id?: string;
  title: string;
  summary: string;
  tags: string[];
  createdAt?: number;
  lastUpdatedAt?: number;
}

export interface PostTags {
  tagName: string;
  count: number;
}
