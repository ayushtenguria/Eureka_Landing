export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

export interface PortfolioItem {
  id: number;
  client: string;
  category: string;
  imageUrl: string;
  stats?: string;
}

export enum GenerationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface StrategyResponse {
  tagline: string;
  platforms: string[];
  contentIdeas: string[];
  vibe: string;
}
