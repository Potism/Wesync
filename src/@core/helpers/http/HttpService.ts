import type { PostsOrPages } from '@tryghost/content-api';
import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://wesync.ghost.io',
  key: '72988465ed07ba52a16452575a',
  version: 'v5.0',
});

export const getPosts = async (params: {
  tags: string;
}): Promise<PostsOrPages> => {
  return api.posts.browse({
    limit: 5,
    filter: params.tags,
    include: 'tags',
  });
};

export const getPost = async (slug: string): Promise<PostsOrPages[0]> => {
  const post = await api.posts.browse({
    limit: 1,
    filter: `slug:${slug}`,
    include: 'tags',
  });

  return post[0] as PostsOrPages[0];
};

export const getTags = async (): Promise<PostsOrPages> => {
  return api.tags.browse({
    limit: 'all',
  });
};
