import className from 'classnames';
import Image from 'next/image';

import priscilla from '../../public/assets/images/priscilla.jpg';

type ISuccessStoryColProps = {
  reverse?: boolean;
};

const SuccessStoryCol = (props: ISuccessStoryColProps) => {
  const successStoryColClass = className(
    'color-gray-900',
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={successStoryColClass}>
      <div className="hero min-h-screen bg-gray-900">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            className="rounded-lg lg:w-2/3"
            src={priscilla}
            alt="Picture of the author"
          />
          <div>
            <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-900 px-3 py-0.5">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="font-medium text-green-200">SCALE</p>
            </div>
            <h1 className="text-5xl font-bold text-white">Sky</h1>
            <p className="py-6">
              We turn technology into a into competitive advantage. We turn
              technology into a into competitive advantage.
            </p>
            <p>TECH STACK</p>
            <p>React / AWS / HTML / Python</p>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-gray-900">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            className="rounded-lg lg:w-2/3"
            src={priscilla}
            alt="Picture of the author"
          />
          <div>
            <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-900 px-3 py-0.5">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="font-medium text-green-200">SCALE</p>
            </div>
            <h1 className="text-5xl font-bold text-white">Tim Enterprise</h1>
            <p className="py-6">
              We turn technology into a into competitive advantage. We turn
              technology into a into competitive advantage.
            </p>
            <p>TECH STACK</p>
            <p>React / AWS / HTML / Python</p>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-gray-900">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            className="rounded-lg lg:w-2/3"
            src={priscilla}
            alt="Picture of the author"
          />
          <div>
            <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-900 px-3 py-0.5">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="font-medium text-green-200">SCALE</p>
            </div>
            <h1 className="text-5xl font-bold text-white">Pullapp</h1>
            <p className="py-6">
              We turn technology into a into competitive advantage. We turn
              technology into a into competitive advantage.
            </p>
            <p>TECH STACK</p>
            <p>React / AWS / HTML / Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SuccessStoryCol };
