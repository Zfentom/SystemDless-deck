// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNord from 'starlight-theme-nord';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeNord()],
			title: 'SystemDless Deck',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
		    customCss: [
        	// Relative path to your custom CSS file
        		'./src/styles/custom.css',
      		],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'FAQ', slug: 'artix/why' },
						{ label: 'Requirements', slug: 'artix/requirements' },
						{ label: 'Preparation', slug: 'artix/preparation' },
					],
				},
				{
					label: 'Installation',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Connect to Wifi', slug: 'artix/install/wifi' },
						{ label: 'Partition the NVMe', slug: 'artix/install/partitioning' },
						{ label: 'Installing the Base System', slug: 'artix/install/installing-base' },
						{ label: 'Chroot and Configuration', slug: 'artix/install/chroot-config' },
						{ label: 'Installing GRUB', slug: 'artix/install/grub' }
					],
				},
				{
					label: 'First Boot and System Setup',
					items: [
								{ label: 'First Reboot & Initial Setup', slug: 'artix/boot/reboot' },
								{ label: 'Drivers', slug: 'artix/hardware/drivers' },
								{ label: 'Audio Setup', slug: 'artix/hardware/audio' },
								{ label: 'Controller Input', slug: 'artix/hardware/input' },
								{ label: 'GPU Drivers Setup', slug: 'artix/hardware/gpu' }
							],
				},
				{
					label: 'Gaming & Applications',
					items: [
						{ label: 'Steam Installation', slug: 'artix/software/steam' },
						{ label: 'QoL Improvements', slug: 'artix/software/qol' },
						{ label: 'Known Issues and Workarounds', slug: 'artix/software/issues-fix' }
					]
				}
			],
		}),
	],
});
