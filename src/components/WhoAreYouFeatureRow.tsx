import className from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import chiave from '../../public/assets/images/chiave.png';
import coppa from '../../public/assets/images/coppa.png';

type IWhoAreYouFeatureRowProps = {
  reverse?: boolean;
};

const WhoAreYouFeatureRow = (props: IWhoAreYouFeatureRowProps) => {
  const whoAreYouFeatureClass = className(
    'bg-gray-900',
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    'pb-6',
    'grid',
    'gap-6',
    'grid-cols-1',
    'md:grid-cols-2',
    'lg:grid-cols-2',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={whoAreYouFeatureClass}>
      <div className="min-h-400 border-color-white w-full rounded-xl border-2 border-gray-700 bg-gray-800 p-10 text-start transition duration-500 hover:scale-105">
        <div className="flex flex-row justify-between">
          <Image src={chiave} alt="Picture of the author" />
          <span className="my-auto text-3xl text-green-300"> 0 → 1</span>
        </div>

        <h3 className="pt-10 text-3xl font-light text-gray-100">
          I&apos;m ready to start
        </h3>
        <div className="text-m my-6 text-gray-100">
          Are you an established company and you’re looking to develop a new
          product or integrate a new product into the existing infrastructure?
        </div>
        <div className="flex flex-row justify-center">
          <button className="ease btn btn-ghost w-full rounded-full bg-white text-black duration-700">
            <Link href="mailto:hello@wesync.dev">LET&apos;S START</Link>
          </button>
        </div>
      </div>

      <div className="min-h-400 border-color-white w-full rounded-xl border-2 border-gray-600 bg-gray-700 p-10 text-start transition duration-500 hover:scale-105">
        <div className="flex flex-row justify-between">
          <Image src={coppa} alt="Picture of the author" />
          <span className="my-auto text-3xl text-green-300"> 0 → 1</span>
        </div>

        <h3 className="font-ligt pt-10 text-3xl text-gray-100">
          I&apos;m looking to scale
        </h3>
        <div className="text-m my-6 text-gray-100">
          Are you a startup in the scale-up phase or an enterprise business and
          you want to refactor your mvp or legacy project to send it to the
          moon?
        </div>
        <div className="flex flex-row justify-center">
          <button className="btn btn-ghost w-full rounded-full bg-white text-black">
            <Link href="mailto:hello@wesync.dev">LET&apos;S SCALE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export { WhoAreYouFeatureRow };
