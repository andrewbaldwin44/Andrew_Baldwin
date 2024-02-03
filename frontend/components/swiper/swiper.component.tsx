import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const breakpointsConfig = {
  mid: 768,
  large: 1200,
};

const swiperBreakpoints = {
  1: {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  [breakpointsConfig.mid]: {
    slidesPerView: 2,
    spaceBetween: 50,
  },
  [breakpointsConfig.large]: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
};

interface ISwiper<Slide> {
  Card: React.ElementType;
  slides: Slide[];
}

export default function Swiper<Slide>({ Card, slides }: ISwiper<Slide>) {
  if (!slides) {
    return null;
  }

  const navigationButtonClasses =
    'force-hidden md:force-flex bg-white p-10 shadow-2xl border rounded-full transition-colors hover:border-purple-500 dark:bg-gray-900 dark:border-gray-900 hover:dark:border-purple-500';

  return (
    <ReactSwiper
      autoplay={{ disableOnInteraction: true, delay: 5000 }}
      breakpoints={swiperBreakpoints}
      centeredSlides
      loop
      modules={[Autoplay, Navigation, Pagination, A11y]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide className='flex items-center justify-center' key={`slide-${index}`}>
            {props => <Card {...slide} {...props} />}
          </SwiperSlide>
        );
      })}

      <div className={`swiper-button-next ${navigationButtonClasses}`} />
      <div className={`swiper-button-prev ${navigationButtonClasses}`} />
    </ReactSwiper>
  );
}
