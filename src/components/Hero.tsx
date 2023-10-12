import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-900">
    <Section yPadding="h-screen">
      <div className="flex-row">
        <div className="wrapper">
          <div className="cube">
            <div className="side side--back">
              <span className="dot"></span>
            </div>
            <div className="side side--top">
              <span className="dot"></span>
            </div>
            <div className="side side--bottom">
              <span className="dot"></span>
            </div>
            <div className="side side--left">
              <span className="dot"></span>
            </div>
            <div className="side side--right">
              <span className="dot"></span>
            </div>
            <div className="side side--front">
              <span className="dot"></span>
            </div>
          </div>
        </div>
        <div className="mt-36 h-48">
          <TypeAnimation
            sequence={[
              'developing web3 applications...',
              2800,
              'managing cloud organizations...',
              2800,
              'designing stunning user interfaces...',
              2800,
              'teaching the next generation of developers...',
              3000,
              'partecipating in worldwide conferences...',
              3000,
            ]}
            speed={51}
            cursor={false}
            className="flex justify-center text-3xl text-gray-100 sm:text-4xl md:text-5xl xl:text-6xl"
            repeat={Infinity}
          />
        </div>
        <div className=" flex justify-end text-sm text-gray-800 hover:text-green-800">
          <button className="ease btn btn-ghost rounded-full bg-gray-100 tracking-wider duration-700 hover:bg-green-700 hover:text-white">
            <Link
              className="text-xl"
              href="mailto:hello@wesync.dev"
              passHref={true}
            >
              → Sync
            </Link>
          </button>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
