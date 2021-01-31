import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import GithubIcon from 'images/github.svg';
import LinkedinIcon from 'images/linkedin.svg';
import 'styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <div className='c-home__heading-container'>
      <h2>Hello, I'm</h2>
      <h1>Andrew Baldwin</h1>
      <h2>Full Stack Web Developer</h2>
      <div className='c-home__social-container'>
        <Link rel='noopener noreferrer' target='_blank' to='https://github.com/andrewbaldwin44'>
          <img alt='Github Icon' src={GithubIcon} />
        </Link>
        <Link
          rel='noopener noreferrer'
          target='_blank'
          to='https://www.linkedin.com/in/andrew-baldwin44/'
        >
          <img alt='Linkedin Icon Icon' src={LinkedinIcon} />
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
