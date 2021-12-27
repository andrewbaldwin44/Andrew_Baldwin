import fetchTestimonials from 'api/testimonials';
import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import Testimonials, {
  IPortfolioTestimonial,
} from 'components/testimonials/testimonials.component';

interface ITestimonial {
  exercise: string;
  feedback: string;
  student: string;
}

interface ITestimonialsPage {
  testimonials: ITestimonial[];
}

export default function TestimonialsPage({ testimonials }: ITestimonialsPage) {
  return (
    <Layout>
      <SEO title='Testimonials' />
      {testimonials && <Testimonials testimonials={testimonials} />}
    </Layout>
  );
}

export async function getStaticProps() {
  const testimonials = await fetchTestimonials();

  return {
    props: { testimonials },
  };
}
