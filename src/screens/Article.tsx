import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import type { Article as ArticleType } from '@/@core/types/ArticleType';
import { Background } from '@/background/Background';
import { Footer } from '@/footer/Footer';
import { Navbar } from '@/navigation/Navbar';
import { AppContext } from '@/pages/_app';
import { getArticle } from '@/services/blog/BlogService';

// type Content = { title: string; href: string; subContents?: Content[] };

// const TableOfContents = (props: { contents: Content[] }) => (
//   <div className="m-auto mt-12 w-full max-w-screen-sm lg:w-1/4">
//     <p>Table of contents:</p>
//
//     <ul className="text-sm leading-6 text-slate-700">
//       {props.contents.map((content) => (
//         <>
//           <li>
//             <a
//               href={content.href}
//               className="block py-1 font-medium text-sky-500 dark:text-sky-400"
//             >
//               {content.title}
//             </a>
//           </li>
//           {content.subContents &&
//             content.subContents.map((subContent) => (
//               // eslint-disable-next-line react/jsx-key
//               <li className="ml-4">
//                 <a
//                   href={subContent.href}
//                   className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
//                 >
//                   <svg
//                     width="3"
//                     height="24"
//                     viewBox="0 -9 3 24"
//                     className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
//                   >
//                     <path
//                       d="M0 0L3 3L0 6"
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                     ></path>
//                   </svg>
//                   {subContent.title}
//                 </a>
//               </li>
//             ))}
//         </>
//       ))}
//     </ul>
//   </div>
// );

export const Article = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { article, setArticle } = React.useContext(AppContext);

  useEffect(() => {
    try {
      if (!article && slug) {
        const fetchData = async () => {
          const retrievedArticle = await getArticle(slug as string);
          setArticle!(retrievedArticle as ArticleType);
        };

        fetchData();
      }
    } catch (e) {
      console.log(e);
    }
  }, [article, slug]);

  // @ts-ignore
  return (
    <Background color="bg-gray-900 text-white">
      <Navbar></Navbar>
      <div className="mx-auto max-w-screen-lg pb-12 pt-10">
        {article && (
          <main className="article text-lg">
            <div className="relative mx-auto mb-4 w-full md:mb-0">
              <div className="px-4 lg:px-0">
                <h2 className="text-4xl font-semibold leading-tight text-gray-100">
                  {article?.title}
                </h2>
                <p className="mb-2 inline-flex items-center justify-center py-2 text-green-700">
                  {article?.tag}
                </p>
              </div>

              <img
                src={article.pictureUrl}
                className="w-full object-cover lg:rounded-lg"
              />
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: article?.content as string }}
            ></div>
          </main>
        )}
      </div>

      <Footer reverse={true} />
    </Background>
  );
};
