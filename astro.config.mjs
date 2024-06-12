import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Initialize project', link: 'guides/create-laravel-jetstream-project/' },
						{ label: 'ERD', link: 'guides/erd/' },
						{ label: 'Audit Trail', link: 'guides/audit-trail/' },
						{ label: 'CRUD', link: 'guides/crud/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
