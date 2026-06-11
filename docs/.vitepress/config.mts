import { defineConfig } from 'vitepress'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
vite: {
    plugins: [
    compression({
     algorithms: ['brotliCompress'],
     threshold: 1024,
    })
  ],
  build:  {
    assetsInlineLimit: 10240,
    minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, 
          drop_debugger: true
        }
      }
    }
  },

head: [
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  ['link', { rel: 'icon', href: '/SystemDless-deck/toolbox.svg' }],
],

  base: '/SystemDless-deck/',
  title: "SystemDless Deck",
  description: "Steam Deck Linux environment without systemd",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Preperation', link: '/artix/install/preparation' },
          {
            text: 'Installation',
            collapsed: true,
            items: [
              { text: 'Connect to WI-FI', link: '/artix/install/wifi' },
              { text: 'Partition the NVMe', link: '/artix/install/partitioning' },
              { text: 'Installing the Base System', link: '/artix/install/installing-base'},
              { text: 'Chroot and Configuration', link: '/artix/install/chroot-config' },
              { text: 'Installing GRUB', link: '/artix/install/grub' }
            ]
           },
          { 
            text: 'Post-Installation',
            collapsed: true,
            items: [
              { text: 'Reboot', link: '/artix/boot/reboot' },
              { text: 'Post Install Setup', link: '/artix/boot/post-boot' }
            ]
           },
          {
            text: 'Hardware',
            collapsed: true,
            items: [
              { text: 'Desktop Setup', link: '/artix/hardware/gpu' },
              { text: 'Drivers', link: '/artix/hardware/drivers' },
              { text: 'Audio', link: '/artix/hardware/audio' },
              { text: 'Controller Input', link: '/artix/hardware/input' }
            ]
          },
          {
            text: 'Software Setup',
            collapsed: true,
            items: [
              { text: 'Steam Installation', link: '/artix/software/steam' },
              { text: 'Quality of Life Improvements', link: '/artix/software/qol' }
            ]
          },
          { text: 'FAQ', link: '/artix/why' },
          { text: 'Known Issues and Workarounds', link: '/artix/software/issues-fix' }

        ]
        
      },
      {
        text: 'Steamdeck',
        items: [
          { text: ''}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zfentom/SystemDless-deck' }
    ]
  }
})
