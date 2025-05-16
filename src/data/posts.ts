import { Post } from '../types';
import { berasOrganikPost } from './posts/beras-organik';
import { kopiArabikaPost } from './posts/kopi-arabika';
import { maduAsliPost } from './posts/madu-asli';
import { kitchenIslandPost } from './posts/kitchen-island';

export const posts: Post[] = [
  kitchenIslandPost,
  berasOrganikPost,
  kopiArabikaPost,
  maduAsliPost
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getPostByPermalink(permalink: string): Post | undefined {
  return posts.find(post => post.permalink === permalink);
}

export function getRelatedPosts(currentPostId: string, count: number = 2): Post[] {
  return posts
    .filter(post => post.id !== currentPostId)
    .slice(0, count);
}