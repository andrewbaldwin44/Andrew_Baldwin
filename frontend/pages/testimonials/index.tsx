import Layout from 'components/layout/layout.component';
import useLoadMorePage from 'components/load-more-button/hooks/use-load-more-page.hook';
import LoadMoreButton from 'components/load-more-button/load-more-button.component';
import SEO from 'components/seo';
import Testimonials from 'components/testimonials/testimonials.component';
import { ITestimonial } from 'components/testimonials/testimonials.types';
import { TESTIMONIALS_CONTROLLER } from 'externalRequest/controllers/testimonials';
import fetchTestimonials from 'externalRequest/testimonials';

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
      <SEO seoTranslationKey='testimonials' />
      {testimonials && <Testimonials testimonials={loadedTiles} />}
      <>
        {!!currentPaginationNumber && (
          <LoadMoreButton isLoading={isLoading} onLoadMore={onLoadMore} />
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
