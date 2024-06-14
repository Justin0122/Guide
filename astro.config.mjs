import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Guide',
			social: {
				github: 'https://github.com/justin0122/guide',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Initialize project', link: 'guides/create-laravel-jetstream-project/' },
						{ label: 'ERD', link: 'guides/erd/' },
						{ label: 'Audit Trail', link: 'guides/audit-trail/' },
						{ label: 'CRUD', link: 'guides/crud/' },
						{ label: 'Spatie Permissions', link: 'guides/spatie-permissions/' },
						{ label: 'Mailserver', link: 'guides/mailserver/' },
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
