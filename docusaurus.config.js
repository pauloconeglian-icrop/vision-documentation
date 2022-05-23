// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iCrop Vision',
  tagline: 'Documentação',
  url: 'https://pauloconeglian-icrop.github.io',
  baseUrl: '/vision-documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pauloconeglian-icrop', // Usually your GitHub org/user name.
  projectName: 'vision-documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Logo iCrop Vision',
          src: 'img/logo-icrop-vision.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentação',
          },
          {
            to: '/blog', 
            label: 'Atualizações', 
            position: 'left'
          },
        ],
      },      
      footer: {        
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Introdução',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'iCrop',
            items: [
              {
                label: 'iCrop Vision',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'iCrop Power',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'iCrop Fleet',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'iSensing',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} iCrop Vision.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
