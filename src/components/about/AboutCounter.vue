<script>

export default {
	components: {
		
	},
	data: () => {
		return {
			cumilativeGPA: "Cumilative GPA out of 4.0",
			graduationTitle: 'Graduated with Distinction',
			awardTitle: 'Awarded the McMaster Engineering International Honour Award'
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<!-- About me counters -->
		<div
			class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"
		>
			<!-- Years of experience counter -->
			<div class="mb-20 sm:mb-0">
				<div
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					aria-label="Cumilative GPA"
				> 3.9
				</div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ cumilativeGPA }}
				</span>
			</div>

			<!-- Positive feedback counter -->
			<div class="mb-20 sm:mb-0">
				<div
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					aria-label="Graduation Year"
				> 2024
				</div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ graduationTitle }}
				</span>
			</div>

			<!-- Projects completed counter -->
			<div class="mb-20 sm:mb-0">
				<div
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					aria-label="Award Year"
				> 2019
				</div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ awardTitle }}
				</span>
			</div>
		</div>
	</div>
</template>
