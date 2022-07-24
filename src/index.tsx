import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";

const container = document.getElementById("app-root") || document.body;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  container
);
