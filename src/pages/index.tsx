import React from 'react';

import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import GithubSvg from 'images/github.svg';
import LinkedinSvg from 'images/linkedin.svg';
import TechnologyIcons from 'components/technology-icons/technology-icons.component';
import 'styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <div className='c-home__heading-container'>
      <h2>Hello, I'm</h2>
      <h1>Andrew Baldwin</h1>
      <h2>Full Stack Web Developer</h2>
      <div className='c-home__social-container'>
        <a rel='noopener noreferrer' target='_blank' href='https://github.com/andrewbaldwin44'>
          <img alt='Github Icon' src={GithubSvg} />
        </a>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/andrew-baldwin44/'
        >
          <img alt='Linkedin Icon Icon' src={LinkedinSvg} />
        </a>
      </div>
    </div>
    <TechnologyIcons />
  </Layout>
);

export default IndexPage;
