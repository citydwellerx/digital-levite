export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Supports basic HTML or plain text
  tags: string[];
}

export type ViewState = 'LIST' | 'DETAIL';