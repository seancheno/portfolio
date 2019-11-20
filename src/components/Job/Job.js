import React from "react";
import classes from "./Job.module.css";

import Logo from "../../assets/images/logo.png";
import CompanySVG from "../UI/SVG/CompanySVG";
const Job = props => (
	<div className={classes.Job}>
		<h3>{props.label}</h3>
		<div>
			<CompanySVG name={props.company} />
		</div>
	</div>
);

export default Job;
