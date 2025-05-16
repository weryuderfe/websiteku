export interface Post {
  id: string;
  title: string;
  slug: string;
  permalink: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
}