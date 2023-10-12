import className from 'classnames';

type IOurExpertisesProps = {
  reverse?: boolean;
};

const OurExpertisesFeatureRow = (props: IOurExpertisesProps) => {
  const ourExpertisesClass = className(
    'flex',
    'flex-wrap',
    'items-center',
    'grid',
    'gap-6',
    'grid-cols-1',
    'md:grid-cols-1',
    'lg:grid-cols-3',
    'leading-none',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={ourExpertisesClass}>
      <div className="w-full rounded-xl border-2 border-gray-300 bg-gray-100 p-10 text-start transition duration-500 hover:scale-105">
        <div className="flex flex-row justify-start">
          <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-200 px-3 pb-1.5 pt-1">
            <p className="font-semibold uppercase tracking-wide text-green-800">
              0→1
            </p>
          </div>
        </div>
        <h3 className="pt-24 text-3xl font-semibold text-gray-900">Start-up</h3>
        <div className="mt-6 text-xl text-gray-500">
          We empower startups to thrive by offering expert development and
          design services.
        </div>
      </div>

      <div className="w-full rounded-xl border-2 border-gray-300 bg-gray-100 p-10 text-start transition duration-500 hover:scale-105">
        <div className="flex flex-row justify-start">
          <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-200 px-3 pb-1.5 pt-1">
            <p className="font-semibold uppercase tracking-wide text-green-800">
              1→∞
            </p>
          </div>
        </div>
        <h3 className="pt-24 text-3xl font-semibold text-gray-900">Scale-up</h3>
        <div className="mt-6 text-xl text-gray-500">
          We provide comprehensive support to scale-up companies on their path
          to successful growth.
        </div>
      </div>

      <div className="w-full rounded-xl border-2 border-gray-300 bg-gray-100 p-10 text-start transition duration-500 hover:scale-105">
        <div className="flex flex-row justify-start">
          <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-green-200 px-3 pb-1.5 pt-1">
            <p className="font-semibold uppercase tracking-wide text-green-800">
              ∞→∞<sup>∞</sup>
            </p>
          </div>
        </div>
        <h3 className="pt-24 text-3xl font-semibold text-gray-900">
          Enterprise
        </h3>
        <div className="mt-6 text-xl text-gray-500">
          We facilitate enterprises in achieving excellence on their path
          towards sustained success.
        </div>
      </div>
    </div>
  );
};

export { OurExpertisesFeatureRow };
