<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of my Key Skills',
			clients: [
				
				{
					id: 1,
					title: 'Python',
					img: require('@/assets/images/skills/Python.png'),
				},
				{
					id: 2,
					title: 'Java',
					img: require('@/assets/images/skills/Java.png'),
				},
				{
					id: 3,
					title: 'SQL',
					img: require('@/assets/images/skills/SQL.png'),
				},
				{
					id: 4,
					title: 'MongoDB',
					img: require('@/assets/images/skills/MongoDB.png'),
				},
				{
					id: 5,
					title: 'JavaScript',
					img: require('@/assets/images/skills/JavaScript.png'),
				},
				{
					id: 6,
					title: 'Vue.js',
					img: require('@/assets/images/skills/Vue.png'),
				},
				{
					id: 7,
					title: 'React',
					img: require('@/assets/images/skills/React.png'),
				},
				{
					id: 8,
					title: 'Bootstrap',
					img: require('@/assets/images/skills/Bootstrap.png'),
				},
				{
					id: 9,
					title: 'Bash',
					img: require('@/assets/images/skills/Bash.png'),
				},
				{
					id: 10,
					title: 'Flask',
					img: require('@/assets/images/skills/Flask.png'),
				},
				{
					id: 11,
					title: 'FastAPI',
					img: require('@/assets/images/skills/FastAPI.png'),
				},
				{
					id: 12,
					title: 'Git',
					img: require('@/assets/images/skills/Git.png'),
				},
				{
					id: 13,
					title: 'Docker',
					img: require('@/assets/images/skills/Docker.png'),
				},
				{
					id: 14,
					title: 'Terraform',
					img: require('@/assets/images/skills/Terraform.png'),
				},
				{
					id: 15,
					title: 'Nomad',
					img: require('@/assets/images/skills/Nomad.png'),
				},
				{
					id: 16,
					title: 'GCP',
					img: require('@/assets/images/skills/GCP.png'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
