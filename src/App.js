import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import Page from "./components/Layout/Page/Page";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faLongArrowAltDown,
	faArrowAltCircleLeft,
	faArrowAltCircleDown

} from "@fortawesome/free-solid-svg-icons";

library.add(
	faLongArrowAltDown,
	faArrowAltCircleLeft,
	faArrowAltCircleDown

);

class App extends Component {
	render() {
		return (
			<Layout>
				<Page />
			</Layout>
		);
	}
}

export default App;
