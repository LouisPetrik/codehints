// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CodeHints',
  tagline: 'Code concepts through cheatsheets',
  url: 'https://codehints.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/LouisPetrik/cheatsheet',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CodeHints',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Cheatsheets',
          },
          //{ to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/LouisPetrik/cheatsheet',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Codehints',
            items: [
              {
                label: 'Cheatsheets',
                to: '/',
              },
            ],
          },

          {
            title: 'More',
            items: [
              {
                label: 'More Cheatsheets',
                to: 'https://codingcheats.io/b',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LouisPetrik/cheatsheet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Louis Petrik`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['haskell'],
      },
    }),
}

module.exports = config
