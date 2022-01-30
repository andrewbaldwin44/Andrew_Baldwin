import cx from 'classnames';

import { useTranslations } from 'hooks/use-translations';
import styles from 'components/testimonials/testimonials.module.css';

export interface ITestimonial {
  student: string;
  studentImage: string;
  exercise: string;
  feedback: string;
}

interface ITestimonials {
  testimonials: ITestimonial[];
}

export default function Testimonials({ testimonials }: ITestimonials) {
  const { getTranslations } = useTranslations();

  const testimonialGridClassnames = cx(styles.testimonialGrid, 'mt-8 lg:mt-16 gap-x-10');

  return (
    <div className={testimonialGridClassnames}>
      {testimonials.map(({ student, studentImage, exercise, feedback }, index) => (
        <div
          className='inline-block relative border border-gray-200 shadow-lg rounded-lg px-6 pt-8 pb-4 mt-6 mb-16 md:mb-12 w-full dark:text-gray-300'
          key={`testimonial-${index}`}
        >
          <div
            className='h-12 w-12 absolute -top-6 rounded-full bg-center bg-cover'
            style={{
              backgroundImage: `url("${studentImage ? studentImage : '/placeholder-user.svg'}")`,
            }}
          />
          <p>{feedback}</p>
          <div className='mt-3'>
            <span>{getTranslations('testimonialsPage.signature', { student, exercise })}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
