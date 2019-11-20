import React, { Component } from "react";
import classes from "./Page.module.css";

import ScrollUpButton from "react-scroll-up-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProjectBox from "../../ProjectBox/ProjectBox";
import ReactLogo from "../../../assets/images/react-logo.png";
import Job from "../../Job/Job";
import CompanySVG from "../../UI/SVG/CompanySVG";
class Page extends Component {
	render() {
		return (
			<div id={"page"} className={classes.Page}>
				<ScrollUpButton ContainerClassName={classes.Scroller} />
				<div className={classes.Header}>
					<div className={classes.Container}>
						<h1>
							I’m Sean Chenoweth, a <span>Full-Stack</span> developer with a
							taste for <span style={{ color: "#f87a21" }}>UX UI</span> design.
							Born in Aspen and currently living in San Francisco.
						</h1>
					</div>

					<div className={classes.JobContainer}>
						<Job company={"intuit"} label={"Currently"}></Job>
						<Job company={"qualify"} label={"Formerly"}></Job>
					</div>
				</div>

				<div className={classes.Content}>
					<h2>Projects</h2>
					<FontAwesomeIcon color={"#55add7"} icon={"arrow-alt-circle-down"} />
					<ProjectBox
						imageUrl={"http://seancheno.com/images/dna-splash.jpg"}
						imageAlt={"Dna Splash"}
						title={"DNA Splash"}
						description={
							"A web app that helps to visualize the genome of 10 different species by assigning custom color values to each of the four base pairs in a selected sequence of DNA."
						}
						tech={[
							"HTML5",
							"CSS3/SASS",
							"ReactJS",
							"ES6",
							"Redux",
							"Flask",
							"Docker",
							"AWS"
						]}
						demoButtonUrl={"http://dnasplash.com"}
						codeButtonUrl={"https://github.com/seancheno/dna-splash-client"}
					/>
					<ProjectBox
						imageUrl={"http://seancheno.com/images/qualify.jpg"}
						gifUrl={"http://seancheno.com/images/koala.gif"}
						imageAlt={"Qualify"}
						title={"Qualify - College Dating"}
						description={
							"A quiz based dating app on IOS that lets you send the first message after you pass someone’s three question quiz. The app is only available for .edu emails and has recieved over 400,000 questions answered and created 10,000 matches between college students."
						}
						tech={["React Native", "CSS3/SASS", "ES6/ES7", "Redux"]}
						demoButtonUrl={
							"https://apps.apple.com/us/app/qualify-college-dating/id967428833"
						}
					/>
					<ProjectBox
						imageUrl={"http://seancheno.com/images/property-management.jpg"}
						imageAlt={"Property Management"}
						title={"Property Management"}
						description={
							"A property management activity tracking web app being used by a team of fifteen property managers serving sixty Aspen estates. The central dashboard allows the team to create, edit, and manage all property tasks and activity."
						}
						tech={["PHP", "JavaScript", "JQuery", "HTML5", "CSS", "MySQL"]}
						demoButtonUrl={"http://seancheno.com/property-management"}
					/>
					<ProjectBox
						imageUrl={"http://seancheno.com/images/silence-removal.jpg"}
						imageAlt={"Silence Removal"}
						title={"Silence Removal"}
						description={
							"An online tool that uses artificial intelligence to detect and remove silence from uploaded audio files. The Convolutional Neural Net was trained with Keras on 10,000 audio samples and is able to predict non speech/music with 97% Accuracy."
						}
						tech={["HTML5", "CSS3", "ReactJS", "ES6", "Flask", "Keras", "AWS"]}
						demoButtonUrl={"http://silenceremoval.com"}
						codeButtonUrl={
							"https://github.com/seancheno/silence-removal-client"
						}
					/>
					<div className={classes.Footer}>
						<div style={{ margin: "15px 0px" }} />
						<img src={ReactLogo} alt={"React Logo"} />
						<h3>Powered By React</h3>
						<a href="https://github.com/seancheno/portfolio" target="_blank">
							<h4 style={{ margin: "0px" }}>Github</h4>
						</a>
						<div style={{ margin: "25px 0px" }} />
					</div>
				</div>
			</div>
		);
	}
}

export default Page;
