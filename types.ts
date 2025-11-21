export interface UserProfile {
  nickname: string;
  avatar: string;
  bio: string;
  niche: string;
}

export interface StrategyItem {
  title: string;
  description: string;
  actionable: boolean;
}

export interface StrategyCategory {
  title: string;
  color: string; // Tailwind color class for background
  items: StrategyItem[];
}

export interface StrategyColumn {
  id: string;
  title: string;
  description: string;
  categories: StrategyCategory[];
}

export interface ChartDataPoint {
  name: string;
  value: number;
  value2?: number;
}

export enum ContentType {
  SHORT_VIDEO = 'Short Video',
  ARTICLE = 'Article',
  IMAGE_POST = 'Image Post'
}

export interface ContentDraft {
  id: string;
  topic: string;
  type: ContentType;
  status: 'draft' | 'scheduled' | 'published';
  generatedContent?: string;
}
