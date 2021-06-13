module.exports = {
  siteMetadata: {
    title: `annabelle.codes`,
    name: `annabelle.codes`,
    siteUrl: `https://annabelle.codes`,
    description: `Annabelle Wright's personal site. Resume, blog posts, random projects, and other musings.`,
    hero: {
      heading: `Hi. I'm Annabelle Wright, sometimes Annabelle Chimpton, welcome to my website.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/annabelle_chimp`,
      },
      {
        name: `github`,
        url: `https://github.com/AnnabelleChimpton`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/annabelle_chimpton`,
      },
      // {
      //   name: `linkedin`,
      //   url: `https://www.linkedin.com/company/narative/`,
      // },
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
