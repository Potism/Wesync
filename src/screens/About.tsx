import Image from 'next/image';

import { KnowledgeFeatureRow } from '@/components/KnowledgeFeatureRow';
import { GreenPill } from '@/components/Pills';
import { Separator } from '@/components/Separator';
import { WhoAreYouFeature } from '@/components/WhoAreYouFeature';
import { Footer } from '@/footer/Footer';
import { Navbar } from '@/navigation/Navbar';

import mem2 from '../../public/assets/images/matte.png';
import Meeting from '../../public/assets/images/Meeting.png';
import OraEtLabora from '../../public/assets/images/OraEtLabora.png';
import OraEtLabora2 from '../../public/assets/images/oralabora2.png';
import mem3 from '../../public/assets/images/ostap.png';
import mem1 from '../../public/assets/images/rick.png';
import emptyPill from '../../public/assets/svg/empty-pill.svg';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const About = () => (
  <div className="body-font bg-gray-100 font-grotensk antialiased">
    <Navbar reverse></Navbar>
    <Background color="bg-gray-100">
      <Section classes="pt-10 sm:pt-22">
        <div className="mt-extra-large">
          <Image src={emptyPill} alt={'home'} />
          <h1 className="space-pre-line mt-4 text-6xl leading-none text-gray-800 sm:text-8xl">
            We believe technology <br />
            is a solution, <br />
            not a problem.
          </h1>
        </div>
      </Section>

      <Section classes={'pt-extra-large pb-extra-large'}>
        <div className={'grid grid-cols-1 lg:grid-cols-4'}>
          <div className="lg:col-span-3">
            <h2 className="space-pre-line text-5xl font-extralight leading-none text-gray-800 sm:text-7xl">
              We are experienced tech-tinkerers who enjoy helping companies
              maximise their potential.
            </h2>
          </div>

          <div className="col-span-1 hidden lg:block">
            <div className="flex h-full items-end justify-end">
              <div>
                <GreenPill text={'SCALE'} classes="ml-auto" />
                <GreenPill text={'OPTIMIZE'} classes="ml-auto" />
                <GreenPill text={'MARKET-FIT'} classes="ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Background>

    <Background color="bg-gray-900">
      <Background color="bg-gray-800 bottom-border-radius overflow-hidden pb-10">
        <Section yPadding="py-24">
          <svg
            width="156"
            height="16"
            viewBox="0 0 156 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" fill="#3CCB7F" />
            <circle cx="36" cy="8" r="8" fill="#16B364" />
            <circle cx="64" cy="8" r="8" fill="#099250" />
            <circle cx="92" cy="8" r="8" fill="#087443" />
            <circle cx="120" cy="8" r="8" fill="#095C37" />
            <circle cx="148" cy="8" r="8" fill="#084C2E" />
          </svg>

          <h3 className="white space-pre-line pt-48 text-4xl leading-none text-gray-100 sm:text-5xl">
            We bring with us our expertise working with global brands
          </h3>
          <div className="space-pre-line flex justify-between py-10 text-2xl text-gray-400"></div>
        </Section>

        <Separator backgroundColor={'#3F3F46'} />
      </Background>
    </Background>
    <Background color="bg-gray-900">
      <Section yPadding="py-48">
        <div className="h-full">
          <h2 className="white space-pre-line pb-5 text-6xl leading-none text-white">
            Meet wesync.
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded bg-gray-900">
              <Image
                src={OraEtLabora}
                alt="Picture of the author"
                className="mb-4 h-auto w-full rounded-xl"
              />
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-white">Work Fast</h2>
                <p className="text-xl ">Ship Fast</p>
              </div>
            </div>

            <div className="rounded bg-gray-900">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-white">MISSION</h2>
                <p className="text-xl ">Description for Item 2</p>
              </div>
              <Image
                src={OraEtLabora2}
                alt="Picture of the author"
                className="mb-4 h-auto w-full rounded-xl"
              />
            </div>

            <div className="rounded bg-gray-900">
              <Image
                src={Meeting}
                alt="Picture of the author"
                className="mb-4 h-auto w-full rounded-xl"
              />
            </div>

            <div className="rounded bg-gray-900">
              <div className="mb-4">
                <h2 className="text-xl text-white">Based in Italy.</h2>
                <p className="text-xl text-white">Working remotely.</p>
                <div className="w-full rounded-2xl border-2 border-gray-700 bg-gray-800 p-8">
                  <div className="flex flex-row justify-between">
                    <div className="flex w-fit items-center gap-2 rounded-full bg-green-300 px-3 py-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-800"></div>
                      <p className="font-medium text-green-800">
                        Meet the founders
                      </p>
                    </div>
                    <div className="flex w-fit items-center gap-2 rounded-full bg-green-700 px-3 py-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-200"></div>
                      <p className="font-medium text-green-200">10+ members</p>
                    </div>
                  </div>
                  <div className="flex w-full flex-row gap-6 pt-8">
                    <div className="h-16 w-16 rounded-full bg-slate-50">
                      <Image
                        src={mem3}
                        className=""
                        alt="Picture of the author"
                      />
                    </div>
                    <div>
                      <span className="text-2xl text-gray-200">Ostap </span>
                      <span className="text-2xl text-gray-500"> Markin</span>
                      <p className="text-l leading-none text-gray-400">
                        Experienced Full Stack Lead Developer, focused on Cyber
                        Security and Web3 Enthusiast.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full flex-row gap-6 pt-8">
                    <div className="h-16 w-16 rounded-full bg-slate-50">
                      <Image
                        src={mem1}
                        className=""
                        alt="Picture of the author"
                      />
                    </div>
                    <div>
                      <span className="text-2xl text-gray-200">Riccardo </span>
                      <span className="text-2xl text-gray-500"> Terzaghi</span>
                      <p className="text-l leading-none text-gray-400">
                        Full Stack Developer and Dev Ops, optimizer focused on
                        performance through architecture.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full flex-row gap-6 py-8">
                    <div className="h-16 w-16 rounded-full bg-slate-50">
                      <Image
                        src={mem2}
                        className=""
                        alt="Picture of the author"
                      />
                    </div>
                    <div>
                      <span className="text-2xl text-gray-200">Matteo</span>
                      <span className="text-2xl text-gray-500"> Schiavon</span>
                      <p className="text-l leading-none text-gray-400">
                        User and data focus designer, building scalable products
                        and adaptable systems.
                      </p>
                    </div>
                  </div>
                  <span className="pt-8 text-3xl text-gray-500">
                    A team built{' '}
                  </span>
                  <span className="pt-8 text-3xl text-gray-100">
                    by professionals
                  </span>
                  <span className="pt-8 text-3xl text-gray-500">
                    , with only the best of the business. A team built{' '}
                  </span>
                  <span className="pt-8 text-3xl text-gray-100">
                    by professionals.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Background>

    <Background color="bg-gray-100">
      <Section yPadding="py-24">
        <div className="h-full">
          <h2 className="space-pre-line py-6 text-3xl leading-none text-gray-400">
            Knowledge.
          </h2>
          <KnowledgeFeatureRow></KnowledgeFeatureRow>
        </div>
      </Section>
    </Background>

    <WhoAreYouFeature></WhoAreYouFeature>

    <Footer reverse />
  </div>
);

export { About };
