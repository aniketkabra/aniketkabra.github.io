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
						"I am a graduate with a Bachelors in Software Engineering (Co-op) from McMaster University (Hamilton, ON). I'm currently working at IBM as an Associate Developer, where I am part of the Gen AI - CX team, withing IBM Consulting.",
				},
				{
					id: 3,
					bio:
						"I have a keen interest in cloud technologies and full stack web development, and have gotten a chance to explore both these fields extensively through my internships at Royal Bank of Canada, Tucows, and DRW.",
				},
				{
					id: 4,
					bio:
						"Apart from my technical work, I also enjoy organizing and volunteering for events. In November 2022, I had the privilege of functioning as the VP Sponsorship for the First Year Integration Conference, presented by Ontario Society of Professional Engineers (OSPE). By starting the organizing process 4 months prior, and working closely with several sponsors, the weekend-long conference successfully hosted over 100 delegates who attended from 16 universities across Ontario.",
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
