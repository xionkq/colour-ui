import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Colour UI',
  description: 'A gradient component library for Tailwind',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Component', link: '/component/overview' },
    ],

    sidebar: [
      {
        text: 'Component',
        items: [
          { text: 'Overview', link: '/component/overview' },
          { text: 'Button', link: '/component/button' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/xionkq/colour-ui' }],
  },
})
