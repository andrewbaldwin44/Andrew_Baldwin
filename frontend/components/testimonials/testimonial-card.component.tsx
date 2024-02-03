import ExercismIcon from 'assets/exercism';
import { ITestimonial } from 'components/testimonials/testimonials.types';
import { useTranslations } from 'hooks/use-translations';

const TESTIMONIAL_SOURCES = {
  EXERCISM: 'exercism',
};

export default function TestimonialCard({
  student,
  studentImage,
  exercise,
  feedback,
  link,
  source,
}: ITestimonial) {
  const { getTranslations } = useTranslations();

  return (
    <a
      className='inline-block relative border border-gray-200 shadow-lg rounded-lg px-6 pt-8 pb-4 mt-6 mb-16 md:mb-12 w-full dark:text-gray-300 duration-100 transition-all ring-purple-500 hover:ring-1 hover:scale-101'
      href={link}
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
      <div className='flex gap-x-1 justify-between mt-3'>
        <span>{getTranslations('testimonialsPage.signature', { student, exercise })}</span>
        {source === TESTIMONIAL_SOURCES.EXERCISM && (
          <ExercismIcon className='h-8 w-8 dark:text-white' />
        )}
      </div>
    </a>
  );
}
