import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.ehssg.org',
	integrations: [
		starlight({
			favicon: 'favicon.ico',
			title: 'Docs by EHSSG',
			social: {
				github: 'https://github.com/ehssgoffice',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'getting-started/introduction' },
					],
				},
				{
					label: 'Office Tasks',
					items: [
						{ label: 'Setting up Email', slug: 'office-tasks/setting-up-email' },
						{ label: 'Using Email', slug: 'office-tasks/using-email' },
					],
				},
				{
					label: 'Humentum Courses by EHSSG',
					items: [
						{ label: 'Learning Courses', slug: 'humentum-courses/learning-courses' },
					],
				},
				{
					label: 'Pharmacy Inventory Management System',
					items: [
						{ label: 'Pharmacy Inventory Web', slug: 'pharmacy-inventory-management-system/pharmacy-inventory-web' },
					],
				},
				{
					label: 'General References',
					items: [
						{ label: 'Email Systems', slug: 'general-references/email-systems' },
					],
				},
			],
		}),
	],
});
