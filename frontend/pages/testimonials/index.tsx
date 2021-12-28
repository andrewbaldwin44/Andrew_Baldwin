import fetchTestimonials from 'api/testimonials';
import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import Testimonials, { ITestimonial } from 'components/testimonials/testimonials.component';

interface ITestimonialsPage {
  testimonials: ITestimonial[];
}

export default function TestimonialsPage({ testimonials }: ITestimonialsPage) {
  console.log({ testimonials });
  return (
    <Layout>
      <SEO title='Testimonials' />
      {testimonials && <Testimonials testimonials={testimonials} />}
    </Layout>
  );
}

export async function getStaticProps() {
  const testimonials = await fetchTestimonials();
  console.log({ testimonials });

  return {
    props: { testimonials },
  };
}
