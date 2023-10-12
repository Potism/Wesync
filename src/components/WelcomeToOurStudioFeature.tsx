import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

import studio1 from '../../public/assets/images/studio-1.png';
import studio2 from '../../public/assets/images/studio-2.png';
import studio3 from '../../public/assets/images/studio-3.png';

const WelcomeToOurStudioFeature = () => (
  <Background color="bg-gray-300">
    <Section>
      <div className="">
        <h3 className="white space-pre-line flex text-5xl font-light text-gray-900">
          This is our studio.
        </h3>
        <div className="flex flex-row">
          <div className="my-auto h-2 w-2 rounded-full bg-green-500"></div>
          <h4 className="white space-pre-line px-2 text-xl font-light text-gray-800">
            Where ideas become reality.
          </h4>
        </div>
        <div className="flex flex-row">
          <div className="my-auto h-2 w-2 rounded-full bg-gray-300"></div>
          <h4 className="white space-pre-line px-2 text-xl font-light text-gray-700">
            Come meet us for a coffee
          </h4>
        </div>
        <div className="flex flex-wrap justify-center py-10">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Image src={studio3} alt="Picture of the author" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={studio2} alt="Picture of the author" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={studio1} alt="Picture of the author" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full text-center sm:px-6">
          <div className="flex flex-row justify-center">
            <div className="my-auto flex h-fit w-fit items-center gap-2 rounded-full bg-white px-4 pb-2 pt-1">
              <p className="text-xl font-extrabold text-gray-900 ">
                wesync/2023
              </p>
            </div>
          </div>
          <br></br>
          <span className="text-gray-900">Bologna, BO - Italy</span>
        </div>
      </div>
    </Section>
  </Background>
);

export { WelcomeToOurStudioFeature };
