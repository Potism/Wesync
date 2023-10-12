/* eslint-disable react/no-unescaped-entities */
import className from 'classnames';

type ITechFeatureRowProps = {
  reverse?: boolean;
};

const AnchorButton = () => (
  <button className="btn btn-circle btn-ghost btn-outline ml-auto">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
    </svg>
  </button>
);

const TechFeatureRow = (props: ITechFeatureRowProps) => {
  const techFeatureRowClass = className(
    'flex-wrap',
    'items-center',
    'grid',
    'grid-cols-1',
    'lg:grid-cols-6',
    'lg:gap-4',
    'gap-1',
    'leading-none',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={techFeatureRowClass}>
      <div className="collapse col-span-1 h-full items-end justify-start rounded-xl bg-gray-300 p-10 transition duration-500 hover:scale-105 lg:col-span-2">
        <h3 className="my-auto text-3xl font-light text-gray-800">
          User experience
        </h3>
        <p className="text-grey-100 pr-20 text-sm">
          Researching and Understanding / Project Goals / Usability Testing
        </p>
        <div className="absolute right-0 flex-row justify-end p-5">
          <AnchorButton />
        </div>
      </div>

      <div className="collapse col-span-1 h-full items-end justify-start rounded-xl bg-gray-600 p-10 transition duration-500 hover:scale-105 lg:col-span-3">
        <h3 className="my-auto text-3xl font-light text-gray-100">
          User Interface
        </h3>
        <p className="pr-20 text-sm font-light text-gray-100">
          Researching and Understanding / Project Goals / Usability Testing
        </p>

        <div className="absolute right-0 flex-row justify-end p-5">
          <AnchorButton />
        </div>
      </div>

      <div className="design-hand-background col-span-1 h-full w-full rounded-xl bg-gray-700 text-center"></div>

      <div className="collapse col-span-1 h-full items-end justify-start rounded-xl bg-gray-800 p-10 transition duration-500 hover:scale-105 lg:col-span-6">
        <h3 className="my-auto text-3xl font-light text-gray-100">
          Software <br></br>Architecture
        </h3>
        <p className="pr-20 text-sm font-light text-gray-100">
          Front-end / Back-end / Web 3 / Database
        </p>

        <div className="absolute right-0 flex-row justify-end p-5">
          <AnchorButton />
        </div>
      </div>

      <div className="cpu-background col-span-1 h-full w-full rounded-xl bg-gray-700 text-center"></div>

      <div className="collapse col-span-1 h-full items-end justify-start rounded-xl bg-gray-300 p-10 transition duration-500 hover:scale-105 lg:col-span-3">
        <h3 className="my-auto text-3xl font-light text-gray-800">
          Cloud <br></br>Services
        </h3>
        <p className="text-grey-100 pr-20 text-sm">Devops/ Building / Deploy</p>
        <div className="absolute right-0 flex-row justify-end p-5">
          <AnchorButton />
        </div>
      </div>

      <div className="collapse col-span-1 h-full items-end justify-start rounded-xl bg-gray-600 p-10 transition duration-500 hover:scale-105 lg:col-span-2">
        <h3 className="my-auto text-3xl font-light text-gray-100">Security</h3>
        <p className="pr-20 text-sm font-light text-gray-100">
          Researching and Understanding / Project Goals / Usability Testing
        </p>
        <div className="absolute right-0 flex-row justify-end p-5">
          <AnchorButton />
        </div>
      </div>
    </div>
  );
};

export { TechFeatureRow };
