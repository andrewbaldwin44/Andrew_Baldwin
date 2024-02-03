import { NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import GithubSvg from 'assets/github';
import LinkedinSvg from 'assets/linkedin';
import Layout from 'components/layout/layout.component';
import Markdown from 'components/markdown/markdown.component';
import SEO from 'components/seo';
import Swiper from 'components/swiper/swiper.component';
import TechnologyIcons from 'components/technology-icons/technology-icons.component';
import TestimonialCard from 'components/testimonials/testimonial-card.component';
import { ITestimonial } from 'components/testimonials/testimonials.types';
import fetchHomepageProps from 'externalRequest/homepageProps';
import { useTranslations } from 'hooks/use-translations';
import HeroFull from 'public/hero-full.png';
import { IProjectTag } from 'types/projects';

export async function getStaticProps({ locale }: NextPageContext) {
  const cmsProps = await fetchHomepageProps({ lang: locale });

  return {
    props: { ...cmsProps, locale },
  };
}

interface IHomepage {
  content: {
    header: string;
    body: string;
  };
  featuredTestimonials: {
    header: string;
    body: string;
    testimonials: ITestimonial[];
  };
  projectTags: IProjectTag[];
}

export default function Homepage({ content, featuredTestimonials, projectTags }: IHomepage) {
  const { getTranslations } = useTranslations();

  return (
    <Layout hasGutter={false}>
      <SEO seoTranslationKey='home' />
      <div className='relative min-h-screen-available flex flex-col justify-between lg:h-screen-available w-screen pt-container lg:pt-0 lg:flex-row lg:items-center'>
        <div className='container mx-auto flex flex-col text-center items-center lg:items-start lg:text-left lg:min-w-content'>
          <h2 className='text-lg lg:text-2xl dark:text-gray-500'>
            {getTranslations('homepage.header')}
          </h2>
          <h1 className='text-4xl font-bold mb-2 lg:text-5xl lg:my-2 dark:text-gray-100'>
            Andrew Baldwin
          </h1>
          <h2 className='text-lg lg:text-2xl dark:text-gray-500'>
            {getTranslations('homepage.subheader')}
          </h2>
          <div className='flex justify-center gap-x-6 mt-8 lg:justify-start'>
            <a href='https://github.com/andrewbaldwin44' rel='noopener noreferrer' target='_blank'>
              <GithubSvg className='h-10 w-10 lg:h-12 lg:w-12 text-black-600 dark:text-gray-100' />
            </a>
            <a
              href='https://www.linkedin.com/in/andrew-baldwin44/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <LinkedinSvg className='h-10 w-10 lg:h-12 lg:w-12' />
            </a>
          </div>
          <div className='flex flex-col mt-12 gap-4 lg:flex-row'>
            <Link className='btn-solid-primary' href='#about-me'>
              {getTranslations('homepage.aboutMe')}
            </Link>
            <Link className='btn-solid-secondary' href='/projects'>
              {getTranslations('homepage.recentProjects')}
            </Link>
          </div>
        </div>
        <div className='relative mt-auto w-full h-96 lg:mt-0 lg:h-1/2 lg:absolute lg:w-2/3 lg:-right-64 lg:h-screen-available'>
          <Image
            alt=''
            fill
            placeholder='blur'
            priority
            src={HeroFull}
            style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          />
        </div>
      </div>
      <div className='w-screen bg-gray-100 py-container md:h-sticky-screen-available lg:py-0 dark:bg-stone-800'>
        <div className='container mx-auto px-3 h-full lg:flex lg:justify-between lg:items-center relative'>
          <div className='flex flex-col gap-y-6 text-justify lg:w-1/2'>
            <h2 className='text-4xl font-bold lg:text-5xl dark:text-gray-100' id='about-me'>
              {content.header}
            </h2>
            <Markdown content={content.body} />
          </div>
          <TechnologyIcons projectTags={projectTags} />
        </div>
      </div>
      <div className='w-screen py-container px-3 md:px-0 lg:py-44'>
        <div className='container mx-auto mb-14 md:mb-24'>
          <h2 className='mb-4 text-4xl font-bold lg:text-5xl dark:text-gray-100' id='about-me'>
            {featuredTestimonials.header}
          </h2>
          <div className='text-justify lg:w-1/2'>
            <Markdown content={featuredTestimonials.body} />
          </div>
          <Link className='link' href='/testimonials'>
            {getTranslations('homepage.testimonialsViewAll')}
          </Link>
        </div>
        <Swiper<ITestimonial> Card={TestimonialCard} slides={featuredTestimonials.testimonials} />
      </div>
    </Layout>
  );
}
