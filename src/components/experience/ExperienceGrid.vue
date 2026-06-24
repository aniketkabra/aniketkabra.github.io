<script>
import feather from 'feather-icons';
import ExperienceSingle from './ExperienceSingle.vue';
import experiences from '../../data/experience.js';

export default {
	components: { ExperienceSingle },
	data: () => {
		return {
			experiences,
			experienceHeading: 'Relevant Experience',
			searchProject: '',
		};
	},
	computed: {
		// Get the filtered experiences
		filteredProjects() {
			if (this.searchProject) {
				return this.filterProjectsBySearch();
			}
			return this.experiences;
		},
	},
	methods: {
		// Filter experiences by title search
		filterProjectsBySearch() {
			let project = new RegExp(this.searchProject, 'i');
			return this.experiences.filter((el) => el.title.match(project));
		},
	},
	mounted() {
		feather.replace();
	},
};
</script>

<template>
	<!-- Experiences grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Experiences grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ experienceHeading }}
			</p>
		</div>

		<!-- Filter and search experiences -->
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
				Search experiences by title
			</h3>
			<div
				class="
					flex
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				"
			>
				<div class="flex justify-between gap-2">
					<span
						class="
							hidden
							sm:block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
					>
						<i
							data-feather="search"
							class="text-ternary-dark dark:text-ternary-light"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium
						pl-3
						pr-1
						sm:px-4
						py-2
						border-1 border-gray-200
						dark:border-secondary-dark
						rounded-lg
						text-sm
						sm:text-md
						bg-secondary-light
						dark:bg-ternary-dark
						text-primary-dark
						dark:text-ternary-light
						"
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Search Experiences"
						aria-label="Name"
					/>
				</div>
			</div>
		</div>

		<!-- Experiences grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ExperienceSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>

<style scoped></style>
