import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Kofi Finance',
  tagline: 'Kofi Finance Blog',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.kofi.finance',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kofi-finance', // Usually your GitHub org/user name.
  projectName: 'kofi-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable the docs plugin
        blog: {
          routeBasePath: '/', // Make blog the main page
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/KofiFinance/kofi-blog/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/og-image.png',
    // Add Algolia DocSearch Configuration
    navbar: {
      logo: {
        alt: 'Kofi Finance Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/KofiFinance/kofi-blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blog',
          items: [
            {
              label: 'All Posts',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://x.com/kofi_finance',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/kofi-finance',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/wagmitt/kofi-finance-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kofi Finance. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
