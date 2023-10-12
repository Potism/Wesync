import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import type {
  Article,
  BlogPageArticleSection,
} from '@/@core/types/ArticleType';
import { Footer } from '@/footer/Footer';
import { Navbar } from '@/navigation/Navbar';
import { AppContext } from '@/pages/_app';
import { getInsightsHome } from '@/services/blog/BlogService';

const ArticleSection = (props: {
  title: string;
  description: string;
  pictureUrl: string;
  mainArticle: Article;
  articles: Article[];
}) => {
  const { setArticle } = React.useContext(AppContext);

  return (
    <div className="articles-card-container m-2 grid grid-cols-1 lg:m-12 lg:grid-cols-6">
      {/* Section Description */}
      <div className="space-y-6 px-6 py-2 lg:col-span-2">
        <h1 className="space-pre-line text-3xl leading-none lg:text-5xl">
          {props.title}
        </h1>

        <Image
          className="mx-auto w-80"
          style={{ borderRadius: 20 }}
          src={props.pictureUrl}
          alt={props.title}
        />

        <p className="text-xl text-gray-300">{props.description}</p>
      </div>
      {/* ./Section Description */}
      {/* Section Articles */}
      <div className="grid grid-cols-1 space-y-5 lg:col-span-4 lg:grid-cols-3 lg:space-x-3">
        {/* Main Article */}
        <Link
          href={{
            pathname: '/article',
            query: { slug: props.mainArticle.slug },
          }}
          className="article-card card bg-base-100 shadow-xl lg:card-side lg:col-span-3 lg:ml-4"
          onClick={() => setArticle!(props.mainArticle)}
        >
          <figure className={'lg:basis-2/5'}>
            <img
              src={props.mainArticle.pictureUrl}
              alt={props.mainArticle.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{props.mainArticle.title}</h2>
            <p>{props.mainArticle.excerpt}</p>
          </div>
        </Link>
        {/* ./Main Article */}
        {props.articles.map((article) => (
          // eslint-disable-next-line react/jsx-key
          <Link
            href={{
              pathname: '/article',
              query: { slug: article.slug },
            }}
            className="article-card card bg-base-100 shadow-xl"
            onClick={() => setArticle!(article)}
          >
            <figure className="px-5 pt-5">
              <img
                className={'rounded-lg'}
                src={article.pictureUrl}
                alt={article.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
              <p>{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* ./Section Articles */}
    </div>
  );
};

export const Blog = () => {
  const [insights, setInsights] = useState<BlogPageArticleSection[]>();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const insightsHome = await getInsightsHome();
        setInsights(insightsHome);
      };

      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="body-font bg-gray-900 font-grotensk antialiased">
      <Navbar reverse={false}></Navbar>
      <div className="container mx-auto pb-12">
        {/* Technology Section */}
        {insights?.map((insight) => (
          // eslint-disable-next-line react/jsx-key
          <ArticleSection
            title={insight.title}
            description={insight.description}
            pictureUrl={insight.pictureUrl}
            mainArticle={insight.mainArticle}
            articles={insight.articles}
          />
        ))}
      </div>

      <Footer reverse={true} />
    </div>
  );
};
