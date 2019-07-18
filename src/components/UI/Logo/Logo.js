import React from "react";
import classes from "./Logo.module.css";

import Logo from "../../../assets/images/logo.png";

const logo = props => (
		<div className={classes.Logo}>
			<img src={Logo} alt="Sean Chenoweth" />
		</div>
);

export default logo; 
