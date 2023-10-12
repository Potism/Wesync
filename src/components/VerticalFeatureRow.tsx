import className from 'classnames';
import Link from 'next/link';

type IVerticalFeatureRowProps = {
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'color-gray-900',
    'flex',
    'flex-wrap',
    'items-center',
    'grid',
    'gap-6',
    'grid-cols-1',
    'md:grid-cols-2',
    'lg:grid-cols-4',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full rounded-xl border-2 border-gray-700 bg-gray-800 p-6 text-start shadow-sm shadow-gray-800 transition duration-500 hover:scale-105">
        <h2 className="pb-8 text-6xl font-light leading-none text-gray-500">
          1.
        </h2>
        <h3 className="pb-3 text-3xl font-semibold text-gray-100">Stable</h3>
        <div className="pb-6 text-lg text-gray-200 ">
          Reliable
          <br></br> even under heavy load
        </div>
        <Link
          href="/tech"
          className="text-m font-semibold uppercase tracking-wider text-gray-200 hover:text-green-300"
        >
          Learn how
        </Link>
      </div>

      <div className="w-full rounded-xl border-2 border-gray-700 bg-gray-800 p-6 text-start shadow-sm shadow-gray-800 transition duration-500 hover:scale-105">
        <h2 className="pb-8 text-6xl font-light leading-none text-gray-500">
          2.
        </h2>
        <h3 className="pb-3 text-3xl font-semibold text-gray-100">Secure</h3>
        <div className="pb-6 text-lg text-gray-200 ">
          Covering vulnerabilities <br></br>assuring no data leak!
        </div>
        <Link
          href="/tech"
          className="text-m font-semibold uppercase tracking-wider text-gray-200 hover:text-green-300"
        >
          Learn how
        </Link>
      </div>

      <div className="w-full rounded-xl border-2 border-gray-700 bg-gray-800 p-6 text-start shadow-sm shadow-gray-800 transition duration-500 hover:scale-105">
        <h2 className="pb-8 text-6xl font-light leading-none text-gray-500">
          3.
        </h2>
        <h3 className="pb-3 text-3xl font-semibold text-gray-100">Fast</h3>
        <div className="pb-6 text-lg text-gray-200 ">
          Blazing performance<br></br> no latency
        </div>
        <Link
          href="/tech"
          className="text-m font-semibold uppercase tracking-wider text-gray-200 hover:text-green-300"
        >
          Learn how
        </Link>
      </div>

      <div className="w-full rounded-xl border-2 border-gray-700 bg-gray-800 p-6 text-start shadow-sm shadow-gray-800 transition duration-500 hover:scale-105">
        <h2 className="pb-8 text-6xl font-light leading-none text-gray-500">
          4.
        </h2>
        <h3 className="pb-3 text-3xl font-semibold text-gray-100">Efficient</h3>
        <div className="pb-6 text-lg text-gray-200 ">
          Maximize impact, <br></br>minimize overheads
          <br></br>
        </div>
        <Link
          href="/tech"
          className="text-m font-semibold uppercase tracking-wider text-gray-200 hover:text-green-300"
        >
          Learn how
        </Link>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
