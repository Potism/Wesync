/* eslint-disable react/no-unescaped-entities */
import className from 'classnames';
import Link from 'next/link';

type IWhoAreYouFeatureRowProps = {
  reverse?: boolean;
};

const KnowledgeFeatureRow = (props: IWhoAreYouFeatureRowProps) => {
  const whoAreYouFeatureClass = className(
    'flex',
    'flex-wrap',
    'items-center',
    'grid',
    'gap-6',
    'grid-cols-1',
    'md:grid-cols-2',
    'lg:grid-cols-2',
    ' leading-none',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={whoAreYouFeatureClass}>
      <div className="border-color-white w-full rounded-xl border-2 bg-gray-800 p-12 text-start transition duration-500 hover:scale-105">
        <div className="flex w-fit items-center gap-2 rounded-full bg-green-800 px-3 py-1">
          <div className="h-2 w-2 rounded-full bg-green-300"></div>
          <p className="font-semibold uppercase text-green-200">0 - 1</p>
        </div>
        <h3 className="text-6xl font-light text-gray-100">
          We teach hungry devs.
        </h3>
        <div className="text-m my-6 text-gray-100">
          We teach hungry devs, who want to learn the latest technologies and
          discover the world of software development.
        </div>
        <div className="flex flex-row justify-center pt-10">
          <button className="btn btn-ghost w-full rounded-full bg-green-200 text-green-900">
            <Link href="mailto:hello@wesync.dev">JOIN THE ACADEMY</Link>
          </button>
        </div>
      </div>

      <div className="border-color-white w-full rounded-xl border-2 bg-gray-200 p-12 text-start transition duration-500 hover:scale-105">
        <div className="flex w-fit items-center gap-2 rounded-full bg-green-900 px-3 py-1">
          <div className="h-2 w-2 rounded-full bg-green-600"></div>
          <p className="font-semibold uppercase text-green-200">SCALE</p>
        </div>
        <h3 className="font-ligt text-6xl text-gray-800">
          We teach devs in-house
        </h3>
        <div className="text-m my-6 text-gray-500">
          We teach devs in-house, who want to learn the latest technologies and
          discover the world of software development.
        </div>

        <div className="flex flex-row justify-center pt-10">
          <button className="btn btn-ghost w-full rounded-full bg-green-900 text-green-200">
            <Link href="mailto:hello@wesync.dev">LEARN MORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export { KnowledgeFeatureRow };
