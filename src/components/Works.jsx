import { Container, Grid, Typography } from "@mui/material"
import FeatureCard from "../utils/FeatureCard"
import { AutoAwesomeMosaic, AutoGraph, CloudQueue, Diversity2 } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";

const works = [
	{
		icon: <CodeIcon />,
		title: "Backend Development",
		description: "Developed robust APIs, followed microservice architecture patterns, utilized service-repository structures, and implemented OAuth integrations for secure and scalable backend systems.",
	},
	{
		icon: <MobileFriendlyIcon />,
		title: "Frontend Development",
		description: "Created responsive UI/UX designs using Tailwind, Sass, and JavaScript frameworks; handled website design updates and built interactive web pages for events and internal systems.",
	},
	{
		icon: <CloudQueue />,
		title: "DevOps &  Cloud Integration",
		description: "Designed and implemented microservices using NodeJS, Python integrating services like Lambda, DynamoDB, S3, Cloudformation and Step Functions for scalable cloud-based systems.",
	},
	{
		icon: <Diversity2 />,
		title: "Leadership & Team Management",
		description: "Acted as Backend Team Lead, delegating tasks, conducting code reviews, and creating internal APIs and documentation using Swagger and ThunderClient.",
	},
	{
		icon: <AutoAwesomeMosaic />,
		title: "CMS Expertise & Plugin Development",
		description: "Created and managed custom WordPress plugins and themes, worked with Joomla and Grav for event-based websites, and implemented analytics and tracking.",
	},
	{
		icon: <AutoGraph />,
		title: "UI/UX Design",
		description: "Created digital assets for web and print, supported brand visuals, and collaborated with development teams to deliver engaging UI elements and visual content for websites and marketing.",
	},
];
const Works = () => {
	return (
		<Container sx={{ textAlign: "center", paddingY: 0 }}>
			<Typography variant="h4" my={5} sx={{ fontWeight:"bold", color:"#000"}}>
				My Work
			</Typography>
			<Grid container spacing={2}>
				{works.map((work, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<FeatureCard p={0} {...work} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default Works;