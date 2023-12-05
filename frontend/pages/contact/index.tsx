import ContactForm from 'components/contact-form/contact-form.component';
import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';

export default function ContactPage() {
  return (
    <Layout>
      <SEO seoTranslationKey='contact' />
      <ContactForm />
    </Layout>
  );
}
