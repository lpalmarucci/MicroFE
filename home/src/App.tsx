import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import HomeContent from "./components/HomeContent";
import withLayout from "./hoc/withLayout";

const App = withLayout(() => <HomeContent />);
ReactDOM.render(<App />, document.getElementById("app"));
