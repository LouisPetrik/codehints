// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://codehints.io',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			langs: ['haskell', 'typescript', 'java', 'python', 'rust', 'dart', 'go', 'rescript'],
		},
	},
	integrations: [
		starlight({
			title: 'CodeHints',
			description: 'Code concepts through cheat sheets',
			favicon: '/favicon.png',
			logo: {
				src: './src/assets/logo.png',
			},
			plugins: [
				starlightBlog({
					title: 'CodeHints Blog',
					authors: {
						louis: {
							name: 'Louis Petrik',
						},
					},
				}),
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/LouisPetrik/codehints' },
			],
			editLink: {
				baseUrl: 'https://github.com/LouisPetrik/codehints/edit/main/',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'Angular', autogenerate: { directory: 'angular' } },
				{ label: 'AssemblyScript', autogenerate: { directory: 'assemblyscript' } },
				{ label: 'ChatGPT', autogenerate: { directory: 'chatgpt' } },
				{ label: 'C++', autogenerate: { directory: 'cpp' } },
				{ label: 'CSS', autogenerate: { directory: 'CSS' } },
				{ label: 'Dart', autogenerate: { directory: 'dart' } },
				{ label: 'Docker', autogenerate: { directory: 'docker' } },
				{ label: 'Go', autogenerate: { directory: 'go' } },
				{ label: 'Haskell', autogenerate: { directory: 'haskell' } },
				{ label: 'Java', autogenerate: { directory: 'java' } },
				{ label: 'JavaScript', autogenerate: { directory: 'javascript' } },
				{ label: 'LaTeX', autogenerate: { directory: 'latex' } },
				{ label: 'Machine Learning', autogenerate: { directory: 'machine-learning' } },
				{ label: 'Markdown', autogenerate: { directory: 'markdown' } },
				{ label: 'PureScript', autogenerate: { directory: 'purescript' } },
				{ label: 'Python', autogenerate: { directory: 'python' } },
				{ label: 'Qwik', autogenerate: { directory: 'qwik' } },
				{ label: 'React', autogenerate: { directory: 'react' } },
				{ label: 'ReScript', autogenerate: { directory: 'rescript' } },
				{ label: 'Rust', autogenerate: { directory: 'rust' } },
				{ label: 'Sinuous', autogenerate: { directory: 'sinuous' } },
				{ label: 'Svelte', autogenerate: { directory: 'svelte' } },
				{ label: 'TypeScript', autogenerate: { directory: 'typescript' } },
				{ label: 'Vim', autogenerate: { directory: 'vim' } },
				{ label: 'WebAssembly', autogenerate: { directory: 'webassembly' } },
			],
			components: {
				Head: './src/components/Head.astro',
			},
		}),
	],
});
