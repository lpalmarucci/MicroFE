import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import withLayout from "home/hoc/withLayout";
import ProductDetail from "./components/ProductDetail";

const App = withLayout(() => <ProductDetail />);
ReactDOM.render(<App />, document.getElementById("app"));
