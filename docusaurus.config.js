const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Grafica pe calculator',
	tagline: 'Materiale pentru obiectul Grafica pe calculator',
	url: 'https://victorchilari.github.io',
	baseUrl: '/usm-grafica-pe-calculator/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'victorchilari', // Usually your GitHub org/user name.
	projectName: 'usm-grafica-pe-calculator', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Grafica pe calculator',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg'
			},
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Laboratoare'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				// {
				// 	title: 'Laboratoare',
				// 	items: [
				// 		{
				// 			label: 'Laboratorul nr.1',
				// 			to: '/laboratorul-nr-1'
				// 		}
				// 	]
				// },
				// {
				// 	title: 'Community',
				// 	items: [
				// 		{
				// 			label: 'Stack Overflow',
				// 			href: 'https://stackoverflow.com/questions/tagged/docusaurus'
				// 		},
				// 		{
				// 			label: 'Discord',
				// 			href: 'https://discordapp.com/invite/docusaurus'
				// 		},
				// 		{
				// 			label: 'Twitter',
				// 			href: 'https://twitter.com/docusaurus'
				// 		}
				// 	]
				// },
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/victorchilari/usm-grafica-pe-calculator'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} Victor Chilari`
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme
		}
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					routeBasePath: '/'
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
