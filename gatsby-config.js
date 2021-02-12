module.exports = {
  siteMetadata: {
    title: 'Andrew Baldwin',
    description: 'Personal Portfolio',
    author: 'Andrew Baldwin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        transpileOnly: true,
        compilerOptions: {
          target: 'es5',
          experimentalDecorators: true,
          jsx: 'react',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'andrew-baldwin',
        short_name: 'andrew-baldwin',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
  ],
};
