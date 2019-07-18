import React, { Component } from "react";
import classes from "./ProjectBox.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProjectBox extends Component {
	render() {
		console.log(this.props.tech);
		let techBoxes = this.props.tech.map((tech, i) => {
			return (
				<div key={i} className={classes.TechBox}>
					{tech}
				</div>
			);
		});

		let demoButton;
		if (this.props.demoButtonUrl) {
			demoButton = (
				<a
					href={this.props.demoButtonUrl}
					style={{ backgroundColor: "white", color: "#8ecbe8" }}
					target="_blank"
				>
					Live Demo <FontAwesomeIcon icon={"arrow-alt-circle-left"} />
				</a>
			);
		}

		let codeButton;
		if (this.props.codeButtonUrl) {
			codeButton = (
				<a href={this.props.codeButtonUrl} target="_blank"
				>
					View Code <FontAwesomeIcon icon={"arrow-alt-circle-left"} />
				</a>
			);
		}

		return (
			<div className={classes.ProjectBox}>
				<a className={classes.Image} href={this.props.demoButtonUrl} target="_blank">
					<img src={this.props.imageUrl} alt={this.props.imageAlt} />
				</a>
				{this.props.gifUrl ? (
					<img
						src={this.props.gifUrl}
						className={classes.Gif}
						alt={this.props.imageAlt}
					/>
				) : null}

				<div className={classes.InnerContent}>
					<h2>{this.props.title}</h2>
					<p>{this.props.description}</p>
					<div className={classes.TechWrapper}>{techBoxes}</div>
					<div className={classes.Links}>
						{demoButton}
						{codeButton}
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectBox;
