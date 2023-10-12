export type Article = {
  title: string;
  content: string;
  pictureUrl: string;
  createdAt: string;
  tag: string;
  excerpt: string;
  slug: string;
};

export type BlogPageArticleSection = {
  mainArticle: Article;
  articles: Article[];
  title: string;
  tag: string;
  description: string;
  pictureUrl: string;
};
