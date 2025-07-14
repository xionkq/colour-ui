import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/colour-ui/',
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
          { text: 'Overview 总览', link: '/component/overview' },
          { text: 'Button 按钮', link: '/component/button' },
          { text: 'Input 输入框', link: '/component/input' },
          { text: 'Switch 开关', link: '/component/switch' },
          { text: 'Slider 滑块', link: '/component/slider' },
          { text: 'Radio 单选框', link: '/component/radio' },
          { text: 'Progress 进度条', link: '/component/progress' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/xionkq/colour-ui' }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
