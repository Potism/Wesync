import Image from 'next/image';

import { TechFeatureRow } from '@/components/TechFeatureRow';
import { Footer } from '@/footer/Footer';
import { Navbar } from '@/navigation/Navbar';

import greenLine from '../../public/assets/svg/green-line.svg';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Tech = () => (
  <div className="body-font text-gray bg-gray-900 font-grotensk text-gray-500 antialiased">
    <Navbar></Navbar>
    <Background color="bg-gray-900">
      <Section yPadding="py-12 ">
        <Image
          src={greenLine}
          alt="Picture of the author"
          className={'green-line'}
        />
        <header>
          <h1 className="space-pre-line pt-48 text-6xl leading-none md:text-9xl">
            <span>
              <span className="text-gray-100">Code</span>
              <span className=""> built to last.</span>
            </span>
            <p>
              <span className="text-gray-100">Design </span>
              <span className="">
                built for <br></br> destribution.
              </span>
            </p>
          </h1>
        </header>
      </Section>
      <Section classes={'mt-extra-large'}>
        <h2 className="space-pre-line text-5xl leading-none md:text-7xl">
          <p className="">
            <span className="space-pre-line">We unlock </span>
            <span className="text-gray-100">complexity. </span>
          </p>
          <p className="text-4xl italic sm:text-7xl">
            / Craftmen of technology.
          </p>
        </h2>

        <Section classes={'mt-extra-large'}>
          <h3 className="space-pre-line py-24 text-3xl leading-none sm:text-6xl">
            <span className="space-pre-line">We use </span>
            <span className="text-gray-100">technology </span>
            <span className="">to power you out</span>
          </h3>
          <TechFeatureRow></TechFeatureRow>
        </Section>
        <Section yPadding="py-6">
          {/* <SuccessStoryCol></SuccessStoryCol> */}
        </Section>
      </Section>

      <Footer reverse />
    </Background>
  </div>
);

export { Tech };
