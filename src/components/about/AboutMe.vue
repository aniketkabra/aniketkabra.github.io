<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						"Hi there!",
				},
				{
					id: 2,
					bio:
						"I am a graduate with a Bachelors in Software Engineering (Co-op) from McMaster University (Hamilton, ON). I'm currently working at IBM Consulting as an AI Fullstack Developer, part of the Artificial Intelligence & Analytics Practice, where I build agentic AI and full-stack solutions for enterprise clients.",
				},
				{
					id: 3,
					bio:
						"I have a keen interest in cloud infrastructure, agentic AI, and full stack web development, and have gotten a chance to explore these fields extensively through my work at IBM and my prior internships at Royal Bank of Canada, Tucows, and DRW.",
				},
				{
					id: 4,
					bio:
						"As far as I can remember, my first programming experience pertains to drawing colorful shapes using single-line commands in MS Logo, dating all the way back to fifth grade. Back then, I had little to no knowledge of how vast and diverse the field of computer science is, but as I grew up, I fostered a keen interest in the field of technology and everything it entails.",
				},
				{
					id: 5,
					bio:
						"To this day, I am fascinated by what I practice and learn, and look forward to sharing my passion for this budding field with people across the world."
				}
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
