import cx from 'classnames';

import TestimonialCard from 'components/testimonials/testimonial-card.component';
import styles from 'components/testimonials/testimonials.module.css';
import { ITestimonial } from 'components/testimonials/testimonials.types';

interface ITestimonials {
  testimonials: ITestimonial[];
}

export default function Testimonials({ testimonials }: ITestimonials) {
  const testimonialGridClassnames = cx(styles.testimonialGrid, 'mt-8 lg:mt-16 gap-x-10');

  return (
    <div className={testimonialGridClassnames}>
      {testimonials.map((props, index) => (
        <TestimonialCard key={`testimonial-${index}`} {...props} />
      ))}
    </div>
  );
}
