<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import projectDetails from '../data/projectDetails.js';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
	},
	props: ['single_project'],
	data: () => {
		return {
			projectDetails,
			idNum: 0,
		};
	},
	methods: {
		getIdNum() {
			for (let project of projectDetails) {
				if (project.title == this.single_project) {
					this.idNum = project.id-1;
				}
			}
			// console.log(this.projectDetails[this.idNum].singleProjectHeader);
		}
	},
	watch: {
		single_project() {
			this.getIdNum()
		}
	},
	mounted() {
		feather.replace(),
		this.getIdNum();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="projectDetails[idNum].singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectDetails[idNum].singleProjectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectDetails[idNum].singleProjectInfo" />

	</div>
</template>

<style scoped></style>
