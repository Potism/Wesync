import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

import { OurExpertisesFeatureRow } from './OurExpertisesFeatureRow';

const OurExpertisesFeature = () => (
  <Background color="bg-gray-200">
    <Section yPadding="py-40">
      <div className="h-full items-center text-center">
        <div className="flex flex-row justify-center">
          <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-gray-100 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <p className="font-semibold uppercase tracking-wide text-gray-900">
              EXPERIENCE & SKILLS
            </p>
          </div>
        </div>
        <h3 className="pb-12 text-5xl font-light text-gray-900">
          Our expertises
        </h3>
        <OurExpertisesFeatureRow />
      </div>
    </Section>
  </Background>
);

export { OurExpertisesFeature };
