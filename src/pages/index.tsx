import React from 'react';

import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import 'styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <div className='c-home__heading-container'>
      <h2>Hi there, I'm</h2>
      <h1>Andrew Baldwin</h1>
      <h2>Full Stack Web Developer</h2>
    </div>
  </Layout>
);

export default IndexPage;
