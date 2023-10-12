import className from 'classnames';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

const ScaleFeature = () => {
  const horizontalFeatureClass = className(
    'flex',
    'items-center',
    'bg-gray-900',
    'py-20',
    'sm:flex-row',
    'flex-col-reverse',
  );
  return (
    <Background color={'bg-gray-900'}>
      <div className={horizontalFeatureClass}>
        <Section>
          <div className="pl-5 text-start leading-none sm:pl-10 md:pl-16 xl:pl-24 2xl:pl-32">
            <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-800 px-3 py-1">
              <div className="h-2 w-2 rounded-full bg-green-200"></div>
              <p className="font-semibold uppercase tracking-wide text-green-200">
                AUTO-SCALING
              </p>
            </div>
            <h3 className="pt-4 text-4xl font-light leading-none text-gray-100 md:text-6xl">
              Scale for your clients.
            </h3>
            <div className="mt-4 text-xl text-gray-400">
              We build your ambitions by developing cutting edge technology
            </div>

            <div className="mt-4 text-xl">
              <span className="font-bold text-green-500"> +120% </span>
              <span className="w-full font-light text-gray-100">
                Tech sector boost in last 5 years
              </span>
            </div>
            <div className="mt-4 text-xl">
              <span className="font-bold text-green-500">+8.2% </span>
              <span className="font-light text-gray-100">
                Compound annual growth rate
              </span>
            </div>
          </div>
        </Section>

        <svg
          className="text-cente w-full justify-end"
          viewBox="0 0 635 829"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M579.128 692L312 415L579.128 138H989.872L1257 415L989.872 692H579.128Z"
            fill="#3F3F46"
          />
          <path
            opacity="0.3"
            d="M916.985 829L517 414.5L916.985 0H1532.02L1932 414.5L1532.02 829H916.985Z"
            fill="#26272B"
          />
          <path
            opacity="0.3"
            d="M365.894 617L170 415L365.894 213H667.106L863 415L667.106 617H365.894Z"
            fill="#51525C"
          />
          <path
            opacity="0.3"
            d="M269.033 563L126 415L269.033 267H488.967L632 415L488.967 563H269.033Z"
            fill="#70707B"
          />
          <path
            opacity="0.3"
            d="M189.699 528L82 417L189.699 306H355.301L463 417L355.301 528H189.699Z"
            fill="#A0A0AB"
          />
          <path
            opacity="0.5"
            d="M113.517 489L42 415L113.517 341H223.483L295 415L223.483 489H113.517Z"
            fill="#E4E4E7"
          />
          <path
            opacity="0.5"
            d="M48.0547 464L0 415L48.0547 366H121.945L170 415L121.945 464H48.0547Z"
            fill="#FCFCFC"
          />
        </svg>
      </div>
    </Background>
  );
};

export { ScaleFeature };
