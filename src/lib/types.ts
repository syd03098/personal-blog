export interface Post extends PostSummary {
  createdAt: number;
  lastUpdatedAt: number;
}

export interface PostSummary {
  id: string;
  title: string;
  summary: string;
  tags: (string | undefined)[];
}

export interface Tag {
  label?: string;
  count: number;
}
