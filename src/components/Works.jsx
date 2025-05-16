import { Container, Grid, Typography } from "@mui/material"
import WorkCard from "../utils/WorkCard";
import { forwardRef } from "react";

const works = [
	{
		title: "Software Engineer",
		companyName: "Better Health Company - Australia (Remote)",
		description: "• Creating Wordpress websites, plugins using PHP, Laravel <br> • DevOps works on server architecture eg. CI/CD, <br> • Implementing Authorization in API integrations <br> • Refactoring Native code and applying code standards",
		year: "Aug 2024 - Feb 2025"
	},
	{
		title: "Software Engineer - Backend - US (Remote)",
		companyName: "Rsolve.co - Part-time",
		description: "• Creating micro-services systems using nodeJS, Python, ReactJS and Lambda <br>• Integrating AWS services and deploying services using serverless such as Lambda, DynamoDB, S3, Cloud Formation, Step Functions, ECS, EC2, Code Build. <br> • Create and manages resources on cloud platform using CloudFormation Terraform",
		year: "Mar 2022 - Jan 2023"
	},
	{
		title: "PHP Developer",
		companyName: "Momentum Media PLT - Australia (Remote)",
		description: "• Creating Events Website with templates in Grav, Angular, Wordpress, Joomla, Laravel<br> • Using Sass and Tailwind for website design updates<br> • Google Analytics for Events Website, tracking all necessary events<br> • Implement Adhoc Projects with new tech stack<br> • BiqQuery Integration<br> • Adding Features on existing mobile app using Angular and Ionic<br> • Perform code reviews",
		year: ""
	},
	{
		title: "Software Engineer - Backend",
		companyName: "Yondu Inc. - BGC Taguig (Remote)",
		description: "• Acting Lead in the Backend Team, Creating APIs<br> • Creating API documentation integrated in project eg. swagger, thunderclient<br> • Delegating task for team, Perform Code Reviews<br> • Microservices approach using Service Repository Pattern<br> • Utilizing AWS services to integrate in the project i.e. (EC2, Lambda, AuroraDB, S3)",
		year: "July 2021 - Mar 2022"
	},
	{
		title: "Lead Web Developer - Fullstack",
		companyName: "I4One Inc. - Ibayo, Tipas, Taguig - (On-site)",
		description: "• Internal Systems Developer, creating integrated website for business<br>• Upgrading systems from Native, PHP Laravel to ReactJS, Python<br>• Integrating AWS services such as Lambda for microservice approach<br>• System Integration API and collaboration for System Implementation",
		year: "Feb 2019 - July 2021"
	},
	{
		title: "Graphic Designer",
		companyName: "FunMania Inc. - BGC Taguig (On-site)",
		description: "• Maintenance for Commercial website using Wordpress<br> • Creating emails from Webhosting<br> • Graphic Designs & Support for Software/Hardware Troubleshooting",
		year: "Jan 2018 - Feb 2019"
	},
];
const Works = forwardRef((props, ref) => {
	return (
		<div ref={ref}>
			<Container sx={{ textAlign: "left", paddingY: 0 }}>
				<Typography variant="h4" my={5} sx={{ fontWeight:"bold", color:"#000"}}>
					Work Experiences
				</Typography>
				<Grid container spacing={3}>
					{works.map((work, index) => (
						<Grid item xs={12} key={index}>
							<WorkCard p={0} {...work} />
							<hr />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	)
})

export default Works;