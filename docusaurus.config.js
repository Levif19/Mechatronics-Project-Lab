// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mechatronics Project Engineering',
  tagline: 'High-precision robot arm with off-the-shelf components',
  favicon: 'img/logo.png',

  url: 'https://your-docusaurus-site.example.com', 
  baseUrl: '/',

  organizationName: 'your-github-username', 
  projectName: 'Mechatronics-Project-Engineering', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71bZBTIQHQ',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Mechatronics Project Engineering',
        logo: {
          alt: 'Project Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Build Manual',
          },
          {
            href: 'https://github.com/your-username/7dof-arm',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: '1. Motivation & Origins',
                to: '/docs/motivation', 
              },
              {
                label: '2. Mechanics & Assembly',
                to: '/docs/mechanics', 
              },
              {
                label: '3. Electronics & Wiring',
                to: '/docs/electronics', 
              },
            ],
          },
          {
            title: 'Community & Source',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/your-username/7dof-arm',
              },
              {
                label: 'YouTube Series',
                href: 'https://youtu.be/gRGoBV__nzw', // Replace with your YouTube channel link later
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 7-DoF Robotic Arm Project. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;