import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

import { VerticalFeatureRow } from './VerticalFeatureRow';

const OptimizedSolution = () => (
  <Background color="bg-gray-900">
    <Section>
      <div className="mt-5 flex w-full flex-col">
        <div className="flex flex-col items-center justify-start">
          <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-900 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-green-200"></div>
            <p className="font-semibold uppercase tracking-wide text-green-200">
              PERFORMANCE FOCUSED
            </p>
          </div>
          <h2 className="text-grey-300 py-16 text-center text-5xl font-light leading-none md:text-6xl">
            <span className="text-gray-500">Optimized </span>
            <span className="text-gray-100"> web </span>
            <span className="text-gray-500">solutions.</span>
          </h2>
        </div>
        <VerticalFeatureRow />
      </div>
    </Section>
  </Background>
);

export { OptimizedSolution };
