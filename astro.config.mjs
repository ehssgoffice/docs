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
						{ label: 'Applying for Humentum Courses', slug: 'humentum-courses/applying-for-humentum-courses'},
						{ label: 'Joining Courses', slug: 'humentum-courses/joining-courses' },
						{ label: 'Learning Courses', slug: 'humentum-courses/learning-courses' },
						{ label: 'Managing Your Account and Profile', slug: 'humentum-courses/managing-your-account-and-profile' },
					],
				},
				{
					label: 'EHSSG IT Orientation',
					items: [
						{ label: 'Google Drive', slug: 'ehssg-it-orientation/google-drive' },
						{ label: 'Office Email', slug: 'ehssg-it-orientation/office-email' },
						{ label: 'Office Printer and Scanner', slug: 'ehssg-it-orientation/office-printer-and-scanner' },
						{ label: 'Event Registration', slug: 'ehssg-it-orientation/event-registration' },
						{ label: 'Editing PDF', slug: 'ehssg-it-orientation/editing-pdf' },
						{ label: 'Creating Signature Images', slug: 'ehssg-it-orientation/creating-signature-images' },
						{ label: 'Common Windows Shortcuts', slug: 'ehssg-it-orientation/common-windows-shortcuts' },
					],
				},
				{
					label: 'Pharmacy Inventory Management System',
					items: [
						{ label: 'Pharmacy Inventory Web', slug: 'pharmacy-inventory-management-system/pharmacy-inventory-web' },
					],
				},
				{
					label: 'EHSSG IT Policy',
					items: [
						{ label: 'Email use policy', slug: 'ehssg-it-policy/email-use-policy' },
						{ label: 'Software installation and usage policy', slug: 'ehssg-it-policy/software-installation-and-usage-policy' },
						{ label: 'Technology Hardware Procurement Policy', slug: 'ehssg-it-policy/technology-hardware-procurement-policy'},
						{ label: 'Policy for getting software', slug: 'ehssg-it-policy/policy-for-getting-software'},
						{ label: 'Policy for subscription services', slug: 'ehssg-it-policy/policy-for-subscription-services'},
						{ label: 'Policy for software use', slug: 'ehssg-it-policy/policy-for-software-use' },
						{ label: 'IT asset management policy', slug: 'ehssg-it-policy/it-asset-management-policy' },
						{ label: 'Policy for bringing your own device', slug: 'ehssg-it-policy/policy-for-bringing-your-own-device'},
						{ label: 'Information technology security policy', slug: 'ehssg-it-policy/information-technology-security-policy'},
						{ label: 'Appendix', slug: 'ehssg-it-policy/appendix' },
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
