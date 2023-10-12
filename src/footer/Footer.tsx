import Image from 'next/image';
import Link from 'next/link';

import { Background } from '@/background/Background';
import { GreenPillButton } from '@/button/GreenPillButton';
import { FromZeroToOneImgPill } from '@/components/Pills';
import { Section } from '@/layout/Section';

import sanluca from '../../public/assets/images/san-luca.webp';

export const Footer = (props: { reverse?: boolean }) => {
  const bgBehind = props.reverse ? 'bg-gray-900' : 'bg-gray-100';
  return (
    <Background color={`${bgBehind}`}>
      <div className="footer-border bg-gray-900">
        <Section>
          <div
            className="grid grid-cols-1 gap-4 pb-12 xl:grid-cols-2"
            style={{ borderBottom: '1px solid #3F3F46' }}
          >
            <div className="card card-side bg-gray-800 text-white shadow-xl">
              <figure>
                <Image src={sanluca} alt="Movie" className="hidden sm:block" />
              </figure>
              <div className="card-body">
                <FromZeroToOneImgPill />
                <h2 className="card-title">We 0 → 1 the next generation</h2>
                <p>
                  {' '}
                  Teaching the newest and most powerful tools. Explaining web3
                  tools.
                </p>
                <div className="card-actions justify-end">
                  <GreenPillButton
                    className="btn-wide mx-auto"
                    text={`LET'S START`}
                  />
                </div>
              </div>
            </div>

            <div>
              <div
                className="flex w-3/5 flex-col bg-gray-900 px-10 text-start text-2xl text-white"
                style={{ borderBottom: '1px solid #3F3F46' }}
              >
                <h1 className="text-2xl leading-9 text-gray-100">
                  We turn technology into <br></br> competitive advantage.
                </h1>
                <div className="flex w-3/5 bg-gray-900 py-10 text-start text-xl text-white">
                  <div className="flex flex-col justify-between space-y-4 text-white">
                    <Link href={'/about'}>About</Link>
                    <Link href={'/education'}>Tech</Link>
                  </div>
                  <div className="flex flex-col justify-between space-y-4 pl-20 text-white">
                    <Link href={'/tech'}>Careers</Link>
                    <Link href={'/about'}>Education</Link>
                  </div>
                </div>
              </div>
              <div className="text-md mt-8 space-x-4 px-10">
                <Link className="link" style={{ color: '#A0A0AB' }} href={''}>
                  Legal & Privacy
                </Link>

                <Link className="link" style={{ color: '#A0A0AB' }} href={''}>
                  Cookie
                </Link>
              </div>
            </div>
          </div>
          <p className="pt-10 text-end" style={{ color: '#A0A0AB' }}>
            wesync srl - P.IVA 04105431201
            <br />
            Via Emilia Ponente 20/2G, Bologna, BO
          </p>
        </Section>
      </div>
    </Background>
  );
};
