import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.mjs
    siteTitle: `Team Torrent`,
    siteTitleAlt: `CISC 322 Team Torrent`,
    siteHeadline: `CISC 322 Software Architecture - Team Torrent`,
    siteUrl: `https://emilia.lekoarts.de`,
    siteDescription: `Portfolio site for Team Torrent in CISC 322 - Software Architecture F23 at Queen's University.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `Team_Torrent`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: "Team Torrent",
        location: "Queen's University",
        showThemeAuthor: false,
        socialMedia: [
          {
            title: 'Alex Aselstyne',
            href: 'https://aselstyne.com'
          },
          {
            title: "Jake Nagel",
            href: "https://github.com/boooleann"
          },
          {
            title: 'Ryan Pleava',
            href: 'https://github.com/PudofkinMini'
          },
          {
            title: 'Daniel Dinari',
            href: 'https://dinari.ca/'
          },
          {
            title: 'Jack Peterson',
            href: 'https://www.linkedin.com/in/jack-peterson-b106a1266/'
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Team Torrent - CISC 322`,
        short_name: `Team Torrent`,
        description: `Portfolio site for Team Torrent in CISC 322 - Software Architecture F23 at Queen's University.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
