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

export type TimeLabel =
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minutes'
  | 'just a minutes ago';

export interface TimeInterval {
  label: TimeLabel;
  seconds: number;
}
