import type { PostsOrPages } from '@tryghost/content-api';
import Router from 'next/router';

import { getPost, getPosts } from '@/@core/helpers/http/HttpService';
import type {
  Article,
  BlogPageArticleSection,
} from '@/@core/types/ArticleType';

import designPicture from '../../../public/assets/images/design.png';
import technologyPicture from '../../../public/assets/images/technology.png';

const tagsList = ['technology', 'design'];
const tags = 'tag:technology,tag:design';

const sections: Record<string, any> = {
  technology: {
    title: 'Technology',
    tag: 'technology',
    description:
      'In this space, we explore designing robust software systems, leveraging cloud power, and creating secure software to protect against cyber threats.',
    pictureUrl: technologyPicture,
  },
  design: {
    title: 'Design',
    tag: 'design',
    description:
      'Cutting-edge tools and methodologies to design and develop a product that not only looks visually appealing, but also provides a seamless and intuitive user experience.',
    pictureUrl: designPicture,
  },
};

const mapArticle = (article: PostsOrPages[0]): Article =>
  ({
    title: article.title as string,
    content: article.html as string,
    pictureUrl: article.feature_image as string,
    createdAt: article.created_at as string,
    tag: article?.tags?.[0]?.slug as string,
    slug: article.slug as string,
    excerpt: article.custom_excerpt ?? article.excerpt,
  }) as Article;

export const getInsightsHome = async (): Promise<BlogPageArticleSection[]> => {
  const res = await getPosts({ tags });

  const rawArticles = res
    .filter(
      (article) =>
        !!article?.tags?.[0]?.slug &&
        tags.includes(article?.tags?.[0]?.slug as string),
    )
    .map(mapArticle);

  return tagsList.map((tag) => {
    const articles = rawArticles.filter((article) => article.tag === tag);

    return {
      mainArticle: articles[0] as Article,
      articles: articles.slice(1),
      ...sections[tag],
    };
  });
};

export const getArticle = async (slug: string): Promise<Article> => {
  const article = await getPost(slug);

  return mapArticle(article);
};

export const openArticle = (article: Article) => {
  Router.push({
    pathname: `/article`,
    query: { slug: article.slug },
  });
};
