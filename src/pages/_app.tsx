import '../styles/global.css';

import type { AppProps } from 'next/app';
import React from 'react';

import type { Article } from '@/@core/types/ArticleType';

export interface AppContextType {
  article: Article | undefined;
  setArticle?: (article: Article) => void;
}

export const AppContext = React.createContext<AppContextType>({
  article: undefined,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [article, setArticle] = React.useState<Article>();

  return (
    <AppContext.Provider value={{ article, setArticle }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default MyApp;
