// Projects detials.

const projectDetails = [
	{
		id: 1,
		title: 'portfolio',
		singleProjectHeader: {
			singleProjectTitle: 'Portfolio - A live demonstration of frontend skills',
			singleProjectDate: '2026',
		},
		singleProjectImages: [
			{
				id: 1,
				title: 'Portfolio Image',
				img: require('@/assets/images/portfolio.png'),
			},
		],
		singleProjectInfo: {
			clientHeading: 'Sample',
			companyInfos: [
				{
					id: 1,
					title: "Website",
					details: "https://aniketkabra.me"
				},
			],
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Vue.js',
						'Javascript',
						'GitHub Pages',
						'GitHub Actions',
					],
				},
			],
			projectDetailsHeading: 'Overview',
			projectDetails: [
				{
					id: 1,
					details:
						"Built and customized this personal portfolio site on top of a Vue.js template, extending and modifying components to reflect personal branding and project showcasing.",
				},
				{
					id: 2,
					details:
						"Deployed via GitHub Pages with a custom domain, serving as a live demonstration of front-end development and UI customization skills.",
				},
				{
					id: 3,
					details:
						"Set up a CI/CD pipeline with GitHub Actions so the site builds and deploys automatically on every push, removing the need for a manual deploy step.",
				},
			],
		},
	},
	{
		id: 2,
		title: 'capstone',
		singleProjectHeader: {
			singleProjectTitle: 'Crowdfeeding - Fresh Free Food',
			singleProjectDate: 'Est. April 2024',
		},
		singleProjectImages: [
			{
				id: 1,
				title: 'Crowdfeeding Image',
				img: require('@/assets/images/driverCapstone.png'),
			},
		],
		singleProjectInfo: {
			clientHeading: 'Sample',
			companyInfos: [
				{
					id: 1,
					title: "Website",
					details: "coming soon :)"
				},
			],
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React Native',
						'MongoDB',
						'Javascript',
						'Expo Go'
					],
				},
			],
			projectDetailsHeading: 'Overview',
			projectDetails: [
				{
					id: 1,
					details:
						"For this capstone project, my team and I created the driver-side of a cross-platform mobile application, helping deliver food to people in need."
				},
				{
					id: 2,
					details:
						"This application enables drivers to view and accept available orders in their vicinity, while guiding them to their destinations using real-time navigation via map integrations in the app.",
				},
				{
					id: 3,
					details:
						"To enable a smooth, cross-platform experience for the drivers, React Native was used in conjunction with Expo Go. All the data was hosted on a MongoDB database. The Google Maps API provided the distance estimators and navigational elements of the app.",
				},
				{
					id: 4,
					details:
						"Given that the app makes use of sensitive information such as the recipient's address and the driver's current location to perform the navigation, displaying this data securely was made a top priority.",
				},
			],
		},
	},
	{
		id: 3,
		title: 'rxeasy',
		singleProjectHeader: {
			singleProjectTitle: 'RxEasy - Making prescription monitoring Rx-tremely easy',
			singleProjectDate: 'January 2023',
		},
		singleProjectImages: [
			{
				id: 1,
				title: 'RxEasy Image',
				img: require('@/assets/images/RxEasy.png'),
			},
		],
		singleProjectInfo: {
			clientHeading: 'Sample',
			companyInfos: [
				{
					id: 1,
					title: "Website",
					details: "https://devpost.com/software/rxeasy"
				},
			],
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Vue.js',
						'Boostrap',
						'Javascript',
						'Figma',
						'Python',
						'Hypercare API',
						'Selenium'
					],
				},
			],
			projectDetailsHeading: 'Overview',
			projectDetails: [
				{
					id: 1,
					details:
						"Prescriptions written by doctors for retrieving medication is often not intuitive to decode for the average person as they often contain shorthand abbreviations derived from Latin. This application aims to increase the transparency for patients receiving prescriptions to strengthen patient-doctor relationships, while boosting productivity in physicians' workflows.",
				},
				{
					id: 2,
					details:
						"RxEasy uses keyboard shortcuts for doctors to generate natural language prescriptions using the shorthand they are already used to. The dashboard view allows them to manage their productivity at a glance. A mobile view is also available for patients to see their prescription information in a centralized location.",
				},
				{
					id: 3,
					details:
						"I worked on making the web app's user interface, as well as populating all the components using Vue.js and Bootstrap. I also wrote the algorithm that converts the doctor's shorthand into natural language using javascript.",
				},
				{
					id: 4,
					details:
						"Additionally, RxEasy used the Hypercare API and Python web scraping for the key features of the app. The Hypercare API was used to create a stronger, more clearer connection between doctor and patient. Web scraping was used to help streamline prescription writing for the doctor's side.",
				},
			],
		},
	},
	{
		id: 4,
		title: 'lowkey',
		singleProjectHeader: {
			singleProjectTitle: 'LowKey - A Command Line Typing Test',
			singleProjectDate: 'March 2022',
		},
		singleProjectImages: [
			{
				id: 1,
				title: 'LowKey Image',
				img: require('@/assets/images/LowKey.png'),
			},
		],
		singleProjectInfo: {
			clientHeading: 'Sample',
			companyInfos: [
				{
					id: 1,
					title: "Website",
					details: "coming soon :)"
				},
			],
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'Bash Scripting',
						'Wikipedia API',
					],
				},
			],
			projectDetailsHeading: 'Overview',
			projectDetails: [
				{
					id: 1,
					details:
						"This was a group project taken on for my Software Project Management course (SFWRENG 3XA3) in the Winter 2022 semester. For this application/game, I used incremental strategies and kept the best software practices in mind during development.",
				},
				{
					id: 2,
					details:
						"This application scraped sentences of varying lengths using Python via the Wikipedia API, to create a command-line interface which acted as a typing test for the user; complete with a timer and a final score after the user had finsihed. It offered the user a chance to test their speed in 4 languages.",
				},
				{
					id: 3,
					details:
						"Furthermore, to increase user-friendliness, we created a Windows executable (.exe) file to launch this game on any computer with Python installed.",
				},
				{
					id: 4,
					details:
						"Lastly, to expand the options available to the user, we created different 'game modes' for the user to use the application. The two primary modes were time-based or difficulty-based, with each mode pulling sentences from Wikipedia dynamically.",
				},
			],
		},
	},
	{
		id: 5,
		title: 'connect2',
		singleProjectHeader: {
			singleProjectTitle: 'Connect2 - Making friends in University, simplified.',
			singleProjectDate: 'March 2021',
		},
		singleProjectImages: [
			{
				id: 1,
				title: 'Connect2 Image',
				img: require('@/assets/images/Connect2.png'),
			},
		],
		singleProjectInfo: {
			clientHeading: 'Sample',
			companyInfos: [
				{
					id: 1,
					title: "Website",
					details: "https://devpost.com/software/connect2-r7jw6d"
				},
			],
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'Google Cloud Platform',
						'Google AI Platform',
						'Firebase',
						'React',
						'scikit-learn',
					],
				},
			],
			projectDetailsHeading: 'Overview',
			projectDetails: [
				{
					id: 1,
					details:
						"This project was completed during Hack The North. Connect2 is a platform that gives students of any University a chance to socialize with their peers, based on their personality type and the courses they have in common.",
				},
				{
					id: 2,
					details:
						"This web-app leveraged Google's AI Platform to host and deploy our clustering model; which when provided with the user's inputs, returns one of five personality subgroups (based on the Big 5 peronsality test).",
				},
				{
					id: 3,
					details:
						"I worked on a variety of GCP services: training and deploying the model on the Cloud, using ML Engine to create an API endpoint for our backend services to use, and managing the storage elements for all the data.",
				},
				{
					id: 4,
					details:
						"Overall, it was a great experience and to see the application running after several learning curves made me very happy.",
				},
			],
		},
	},
	{
		id: 6,
		title: 'imageClassifier',
		singleProjectHeader: {
			singleProjectTitle: 'Python Image Classifier',
			singleProjectDate: 'November 2020',
		},
		singleProjectImages: [
			{
				id: 1,
				title: 'Image Classifier Image',
				img: require('@/assets/images/imageClass.png'),
			},
		],
		singleProjectInfo: {
			clientHeading: 'Sample',
			companyInfos: [
				{
					id: 1,
					title: "Website",
					details: "https://github.com/aniketkabra/Image-Classifier"
				},
			],
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'Jupyter Notebook',
						'Pandas',
						'Keras',
						'TensorFlow',
						'NumPy',
					],
				},
			],
			projectDetailsHeading: 'Overview',
			projectDetails: [
				{
					id: 1,
					details:
						"I've always been fascinated by the exponential growth of AI and machine learning in our day-to-day lives. The best way to learn about these concepts, in my opinion, is by experimenting and finding out what takes place behind the scenes.",
				},
				{
					id: 2,
					details:
						"Therefore, using TensorFlow's Keras interface, I used deep learning concepts to train a model to identify mountains, streets, glaciers, buildings, seas, and forests from their respective images.",
				},
				{
					id: 3,
					details:
						"Working on this project was fascinating, as I could finally understand the basics of how artificial neural networks train using different datasets, and how we can skew with certain parameters to fine tune the results returned by the model.",
				},
			],
		},
	},
	{
		id: 7,
		title: 'halfway',
		singleProjectHeader: {
			singleProjectTitle: 'Picking a movie has never been easier.',
			singleProjectDate: 'February 2020',
		},
		singleProjectImages: [
			{
				id: 1,
				title: 'Halfway Image',
				img: require('@/assets/images/Halfway.png'),
			},
		],
		singleProjectInfo: {
			clientHeading: 'Sample',
			companyInfos: [
				{
					id: 1,
					title: "Website",
					details: "https://devpost.com/software/halfway-p6xsng"
				},
			],
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'HTML',
						'CSS',
						'Data Structures & Algorithms'
					],
				},
			],
			projectDetailsHeading: 'Overview',
			projectDetails: [
				{
					id: 1,
					details:
						"This project was completed during StarterHacks, the first official hackathon I attended. Halfway allows users to imput movie genres and uses an online API database to find the top 5 movies meeting the criteria for all the people.",
				},
				{
					id: 2,
					details:
						"I worked on the backend team, and devised an optimized algorithm that quickly stores and iterates through the given data and provides a suitable genre and suggested movies. The database for the movies was scraped from an online movie API that sorted the movies based on genres and popularity.",
				},
				{
					id: 3,
					details:
						"Given that this was my first hackathon, I had several hiccups along the way. But thanks to the myriad of resources available online and with the help of the mentors at the hackathon, the web-app was up and running in the alloted time.",
				},
			],
		},
	},
	{
		id: 8,
		title: 'Instatute',
		singleProjectHeader: {
			singleProjectTitle: 'Plan, schedule, and communicate on the go.',
			singleProjectDate: 'March 2020',
		},
		singleProjectImages: [
			{
				id: 1,
				title: 'Instatute Image',
				img: require('@/assets/images/Instatute.png'),
			},
		],
		singleProjectInfo: {
			clientHeading: 'Sample',
			companyInfos: [
				{
					id: 1,
					title: "Website",
					details: "https://devpost.com/software/instatute-n3ldtz"
				},
			],
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'PyQt',
						'Javascript',
					],
				},
			],
			projectDetailsHeading: 'Overview',
			projectDetails: [
				{
					id: 1,
					details:
						"This project was completed during DeltaHacks. Instatute is a multi-purpose Web App that allows ease of communication, class scheduling and grade checking for both teachers and students.",
				},
				// {
				// 	id: 2,
				// 	details:
				// 		"I worked on the backend team, and devised an optimized algorithm that quickly stores and iterates through the given data and provides a suitable genre and suggested movies. The database for the movies was scraped from an online movie API that sorted the movies based on genres and popularity.",
				// },
				// {
				// 	id: 3,
				// 	details:
				// 		"Given that this was my first hackathon, I had several hiccups along the way. But thanks to the myriad of resources available online and with the help of the mentors at the hackathon, the web-app was up and running in the alloted time.",
				// },
			],
		},
	},
];

export default projectDetails;
