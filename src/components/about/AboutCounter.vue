<script>

export default {
	components: {
		
	},
	data: () => {
		return {
			experienceTitle: "Years of Fullstack Developer Experience",
			savingsTitle: 'Delivered in Estimated Client Savings',
			efficiencyTitle: 'Faster Task Completion Time for AI Assistant Clients'
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
					aria-label="Years of Experience"
				> 3+
				</div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ experienceTitle }}
				</span>
			</div>

			<!-- Client savings counter -->
			<div class="mb-20 sm:mb-0">
				<div
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					aria-label="Client Savings"
				> $25M+
				</div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ savingsTitle }}
				</span>
			</div>

			<!-- Operational efficiency counter -->
			<div class="mb-20 sm:mb-0">
				<div
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					aria-label="Operational Efficiency"
				> 60%
				</div>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ efficiencyTitle }}
				</span>
			</div>
		</div>
	</div>
</template>
