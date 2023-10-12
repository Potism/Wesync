import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

const Designed = () => (
  <Background color="bg-gray-900">
    <Section>
      <div className="text-center">
        <div className="flex flex-row justify-center pt-48">
          <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-200 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-green-800"></div>
            <p className="font-semibold uppercase tracking-wide text-green-800">
              UI/UX
            </p>
          </div>
        </div>

        <div className="py-10 text-4xl leading-tight sm:text-5xl md:text-6xl">
          <span className="font-light text-gray-400">
            We design digital experiences <br></br> with a
            <span className="font-medium text-gray-100"> user-centric </span>
            focus.
          </span>
        </div>
        <div className="py-2 leading-tight">
          <span className="text-xl font-light text-gray-400 sm:text-2xl">
            Pixel perfect web solutions
          </span>
        </div>

        <svg
          className="mx-auto w-40 pt-12"
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
      </div>
    </Section>
  </Background>
);

export { Designed };
