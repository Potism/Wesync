import Link from 'next/link';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

import { WhoAreYouFeatureRow } from './WhoAreYouFeatureRow';

const WhoAreYouFeature = () => (
  <Background color="bg-gray-900">
    <Section>
      {' '}
      <div className="h-full w-full py-10 text-center">
        <h3 className="mt-36 text-3xl leading-9 text-gray-100">Who are you?</h3>
        <svg
          className="mx-auto mt-6 flex w-40 justify-center"
          viewBox="0 0 184 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" fill="#084C2E" />
          <circle cx="36" cy="8" r="8" fill="#095C37" />
          <circle cx="64" cy="8" r="8" fill="#099250" />
          <circle cx="92" cy="8" r="8" fill="#3CCB7F" />
          <circle cx="120" cy="8" r="8" fill="#099250" />
          <circle cx="148" cy="8" r="8" fill="#095C37" />
          <circle cx="176" cy="8" r="8" fill="#084C2E" />
        </svg>

        <WhoAreYouFeatureRow />
        <div className="mb-32 flex flex-col rounded-xl border-2 border-green-300 bg-green-200 p-4 text-center transition duration-500 hover:scale-105 sm:flex-row sm:items-center sm:justify-between sm:p-6 sm:text-left">
          <div className="font-base text-4xl text-green-900">
            Just curious? Let&apos;s talk.
          </div>

          <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
            <button className="btn btn-ghost rounded-full bg-green-900 tracking-wider text-green-100">
              <Link href="mailto:hello@wesync.dev">BOOK A 15 MIN CALL</Link>
            </button>
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export { WhoAreYouFeature };
