import Image from 'next/image';

import fromZeroToOne from '../../public/assets/svg/zero-to-one-arrow.svg';

export const Pill = (props: { text: string }) => {
  return (
    <div className="flex flex-row">
      <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-gray-200 px-3 py-0.5">
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
        <p className="text-black-800 font-medium">{props.text}</p>
      </div>
    </div>
  );
};

export const GreenPill = (props: { text: string; classes?: string }) => {
  return (
    <div
      className={`my-3 flex w-fit items-center gap-2 rounded-full bg-green-900 px-3 py-1 ${props.classes}`}
    >
      <div className="h-2 w-2 rounded-full bg-green-600"></div>
      <p className="font-semibold uppercase text-green-200">{props.text}</p>
    </div>
  );
};

export const FromZeroToOneImgPill = () => {
  return <Image src={fromZeroToOne} alt={'0 -> 1'} />;
};
