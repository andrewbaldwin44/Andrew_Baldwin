import { useState, useEffect } from 'react';

import fetchTestimonials from 'api/testimonials';
import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import Testimonials, { ITestimonial } from 'components/testimonials/testimonials.component';
import { TESTIMONIALS_CONTROLLER } from 'api/controllers/testimonials';
import LoadMoreButton from 'components/load-more-button/load-more-button.component';
import useLoadMorePage from 'components/load-more-button/hooks/use-load-more-page.hook';

interface ITestimonialsPage {
  testimonials: ITestimonial[];
  paginationNumber: number;
}

export default function TestimonialsPage({ testimonials, paginationNumber }: ITestimonialsPage) {
  const { onLoadMore, isLoading, loadedTiles, currentPaginationNumber } =
    useLoadMorePage<ITestimonial>({
      initialTiles: testimonials,
      initialPaginationNumber: paginationNumber,
      loadMoreCallback: TESTIMONIALS_CONTROLLER.get,
    });

  return (
    <Layout>
      <SEO title='Testimonials' />
      {testimonials && <Testimonials testimonials={loadedTiles} />}
      <>
        {!!currentPaginationNumber && (
          <LoadMoreButton onLoadMore={onLoadMore} isLoading={isLoading} />
        )}
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const { response, paginationNumber } = await fetchTestimonials();

  return {
    props: { testimonials: response, paginationNumber },
  };
}
