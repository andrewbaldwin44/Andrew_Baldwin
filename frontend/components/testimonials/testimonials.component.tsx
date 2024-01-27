import cx from 'classnames';

import ExercismIcon from 'assets/exercism';
import styles from 'components/testimonials/testimonials.module.css';
import { useTranslations } from 'hooks/use-translations';

export interface ITestimonial {
  student: string;
  studentImage: string;
  exercise: string;
  feedback: string;
  source: string;
  link: string;
}

interface ITestimonials {
  testimonials: ITestimonial[];
}

const TESTIMONIAL_SOURCES = {
  EXERCISM: 'exercism',
};

export default function Testimonials({ testimonials }: ITestimonials) {
  const { getTranslations } = useTranslations();

  const testimonialGridClassnames = cx(styles.testimonialGrid, 'mt-8 lg:mt-16 gap-x-10');

  return (
    <div className={testimonialGridClassnames}>
      {testimonials.map(({ student, studentImage, exercise, feedback, link, source }, index) => (
        <a
          className='inline-block relative border border-gray-200 shadow-lg rounded-lg px-6 pt-8 pb-4 mt-6 mb-16 md:mb-12 w-full dark:text-gray-300 duration-100 transition-all ring-blue-500 hover:ring-1 hover:scale-101'
          href={link}
          key={`testimonial-${index}`}
          rel='noreferrer'
          target='_blank'
        >
          <div
            className='h-12 w-12 absolute -top-6 rounded-full bg-center bg-cover'
            style={{
              backgroundImage: `url("${studentImage ? studentImage : '/placeholder-user.svg'}")`,
            }}
          />
          <p>{feedback}</p>
          <div className='flex justify-between mt-3'>
            <span>{getTranslations('testimonialsPage.signature', { student, exercise })}</span>
            {source === TESTIMONIAL_SOURCES.EXERCISM && (
              <ExercismIcon className='h-8 w-8 dark:text-white' />
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
