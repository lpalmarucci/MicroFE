import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import withLayout from "home/hoc/withLayout";
import { withRoutingModule } from "./routes";

const App = withLayout(withRoutingModule);
ReactDOM.render(<App />, document.getElementById("app"));
