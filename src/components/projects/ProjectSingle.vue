<script>
export default {
	props: ['single_project'],
};
</script>

<template>
	<router-link
		:to="`/projects/${single_project.href}`"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project"
	>
		<div>
			<img
				:src="single_project.img"
				:alt="single_project.title"
				class="rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
				{{ single_project.title }}
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>{{ single_project.category }}</span
			>
		</div>
	</router-link>
</template>

<style lang="scss" scoped></style>
