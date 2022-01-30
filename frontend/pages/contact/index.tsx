import SEO from 'components/seo';
import Layout from 'components/layout/layout.component';
import ContactForm from 'components/contact-form/contact-form.component';

export default function ContactPage() {
  return (
    <Layout>
      <SEO seoTranslationKey='contact' />
      <ContactForm />
    </Layout>
  );
}
