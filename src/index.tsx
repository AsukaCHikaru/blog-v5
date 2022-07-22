import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

const container = document.getElementById("app-root") || document.body;

ReactDOM.hydrate(<App />, container);
