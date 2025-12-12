import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NITCShell",
  description: "Documentation for NITCShell",
  base: '/nitcshell-docs/',
  head: [
    ['link', { rel: 'icon', href: '/purple-shell.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/purple-shell.png',
    siteTitle: 'NITC Shell',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Architecture', link: '/architecture' },
      { text: 'RoadMap', link: 'stages/roadmap'}
    ],

    sidebar: [
      {
        text: 'NITCShell', link: '/',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Architecture', link: '/architecture' },
        ]
      },
      {
        text: 'Implementation',
        collapsed: true,  // Keep expanded by default
        items: [
          { text: 'RoadMap', link: '/stages/roadmap' },
          { text: 'Stage 1: [Name]', link: '/stages/stage-1' },
          { text: 'Stage 2: [Name]', link: '/stages/stage-2' },
          { text: 'Stage 3: [Name]', link: '/stages/stage-3' },
          { text: 'Stage 4: [Name]', link: '/stages/stage-4' },
          { text: 'Stage 5: [Name]', link: '/stages/stage-5' }
        ]
      },
      {
        text: 'Reference',
        collapsed: true,  // Start collapsed
        items: [
          { text: 'Reading Material', link: '/reading-material' },
          { text: 'Troubleshooting', link: '/reference/troubleshooting' },
          { text: 'FAQ', link: '/reference/faq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Centinoughty/nitc-shell/tree/main' }
    ]
  }
})
