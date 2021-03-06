module.exports = {
  siteMetadata: {
    title: "AudioCORE",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "v6Xt-Vz5ZAY8AJIKJBjBUvRdhGy-4Tyl_LDAxRf0g-o",
        spaceId: "x1tysw34m0ph",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
