import { useState, useEffect } from 'react';

import fetchTestimonials from 'api/testimonials';
import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import Testimonials, { ITestimonial } from 'components/testimonials/testimonials.component';
import { TESTIMONIALS_CONTROLLER } from 'api/controllers/testimonials';

interface ITestimonialsPage {
  testimonials: ITestimonial[];
  paginationNumber: number;
}

export default function TestimonialsPage({ testimonials, paginationNumber }: ITestimonialsPage) {
  const [loadedTestimonials, setLoadedTestimonials] = useState(testimonials);
  const [isLoading, setIsLoading] = useState(false);
  const [nextTestimonials, setNextTestimonials] = useState(paginationNumber);

  const onLoadMore = async () => {
    setIsLoading(true);

    const { response, paginationNumber: newNextTestimonials } = await TESTIMONIALS_CONTROLLER.get({
      paginationNumber,
    });
    setLoadedTestimonials([...loadedTestimonials, ...response]);
    setNextTestimonials(newNextTestimonials);

    setIsLoading(false);
  };

  return (
    <Layout>
      <SEO title='Testimonials' />
      {testimonials && (
        <Testimonials
          testimonials={loadedTestimonials}
          shouldShowLoadMore={!!nextTestimonials}
          onLoadMore={onLoadMore}
          isLoading={isLoading}
        />
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const { response, paginationNumber } = await fetchTestimonials();

  return {
    props: { testimonials: response, paginationNumber },
  };
}
