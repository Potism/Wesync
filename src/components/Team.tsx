import Image from 'next/image';

import mem2 from '../../public/assets/images/matte.png';
import mem3 from '../../public/assets/images/ostap.png';
import mem1 from '../../public/assets/images/rick.png';
import mem4 from '../../public/assets/images/woman1.png';
import mem5 from '../../public/assets/images/woman2.png';

const Team = () => (
  <div className="flex-row bg-gray-100 py-10 text-center ">
    <div className="flex justify-center ">
      <Image src={mem5} alt="Picture of the author" className="w-1/3 sm:w-48" />
      <Image src={mem4} alt="Picture of the author" className="w-1/3 sm:w-48" />
    </div>
    <div className="flex justify-center">
      <Image src={mem1} alt="Picture of the author" className="w-48" />
      <Image src={mem3} alt="Picture of the author" className="w-48" />
      <Image src={mem2} alt="Picture of the author" className="w-48" />
    </div>
    <div className="flex flex-row justify-center align-middle">
      <svg
        className="w-1/5"
        viewBox="0 0 366 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M349.177 0.988286L366 0.988281L320.578 46.41L312.167 37.9986L349.177 0.988286Z"
          fill="#E4E4E7"
        />
        <path
          d="M349.177 75.0088L366 75.0088L320.578 29.5871L312.167 37.9985L349.177 75.0088Z"
          fill="#E4E4E7"
        />
        <path d="M328.989 37.843H0" stroke="#E4E4E7" strokeWidth="12" />
      </svg>
      <div className="w-3/5">
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-center">
            <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-gray-200 px-3 py-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="font-semibold uppercase tracking-wide text-gray-900">
                EXPERIENCE & SKILLS
              </p>
            </div>
          </div>
        </div>
        <h3 className="py-5 text-3xl font-light leading-none text-gray-900 sm:text-5xl">
          A team built with the top <br></br> developers, designers and<br></br>
          engineers.
        </h3>
      </div>
      <svg
        className="w-1/5"
        viewBox="0 0 392 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0179 0.35938L0 0.359375L48.6484 49.0078L57.6573 39.9988L18.0179 0.35938Z"
          fill="#E4E4E7"
        />
        <path
          d="M18.0179 79.6382L0 79.6382L48.6484 30.9898L57.6574 39.9988L18.0179 79.6382Z"
          fill="#E4E4E7"
        />
        <path d="M39.6404 39.832H392" stroke="#E4E4E7" strokeWidth="12" />
      </svg>
    </div>
    <svg
      className="mx-auto w-40 py-12"
      viewBox="0 0 184 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="#D3F8DF" />
      <circle cx="36" cy="8" r="8" fill="#AAF0C4" />
      <circle cx="64" cy="8" r="8" fill="#73E2A3" />
      <circle cx="92" cy="8" r="8" fill="#3CCB7F" />
      <circle cx="120" cy="8" r="8" fill="#73E2A3" />
      <circle cx="148" cy="8" r="8" fill="#AAF0C4" />
      <circle cx="176" cy="8" r="8" fill="#D3F8DF" />
    </svg>
  </div>
);

export { Team };
