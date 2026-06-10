import { defineConfig } from 'vitepress'

export default defineConfig({

  base: '/SystemDless-deck/',

  title: "SystemDless Deck",
  description: "Steam Deck Linux environment without systemd",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Information',
        items: [
          { text: 'Faq', link: '/artix/why' },
          { text: 'Preperation', link: '/artix/install/preparation' },
          { 
            text: 'Install Artix',
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
            text: 'First boot',
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
              { text: 'GPU and KDE', link: '/artix/hardware/gpu' },
              { text: 'Drivers', link: '/artix/hardware/drivers' },
              { text: 'Audio', link: '/artix/hardware/audio' }
            ]
          },
          {
            text: 'Software Setup',
            collapsed: true,
            items: [
              { text: 'Steam Installation', link: '/artix/software/steam' },
              { text: 'Quality of Life Improvements', link: '/artux/software/qol' }
            ]
          }
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
