// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const vsDark = require('prism-react-renderer/themes/vsDark')
const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'CodeHints',
	tagline: 'Code concepts through cheat sheets',
	url: 'https://codehints.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',
	markdown: {
		mermaid: true,
	},

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	// by now, only for the KaTeX support
	stylesheets: [
		{
			href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
			type: 'text/css',
			integrity:
				'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
			crossorigin: 'anonymous',
		},
	],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					remarkPlugins: [math],
					rehypePlugins: [katex],
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/LouisPetrik/codehints#contributing',
				},
				//blog: false,
				blog: {
					blogTitle: 'CodeHints.io Blog',
					blogDescription: 'A blog about all things code',
					postsPerPage: 'ALL',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				// experimental:
				gtag: {
					trackingID: 'G-JX2QYMM688',
					anonymizeIP: true,
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
			docs: {
				sidebar: {
					// makes the categories drop down collapse once another one is opened up
					autoCollapseCategories: true,
				},
			},
			navbar: {
				title: 'CodeHints',
				logo: {
					alt: 'CodeHints Logo',
					src: 'img/logo.png',
				},
				items: [
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Cheat Sheets',
					},

					{
						href: 'https://github.com/LouisPetrik/codehints',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Codehints',
						items: [
							{
								label: 'Cheat sheets',
								to: '/',
							},
						],
					},

					{
						title: 'More',
						items: [
							{
								label: 'More Cheat sheets',
								to: 'https://codingcheats.io/b',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/LouisPetrik/codehints',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Louis Petrik`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: vsDark, // formerly: darkcodetheme
				additionalLanguages: [
					'haskell',
					'typescript',
					'java',
					'python',
					'rescript',
					'rust',
				],
			},
		}),

	themes: [
		// ... Your other themes.
		[
   
			require.resolve('@easyops-cn/docusaurus-search-local'),
			{
				hashed: true,
				docsRouteBasePath: '/',
				indexBlog: true,
				indexPages: false,
				explicitSearchResultPath: true,
			},
		],
  

		'@docusaurus/theme-mermaid',
	],
}

module.exports = config