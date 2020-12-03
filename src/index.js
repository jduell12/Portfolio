import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import App from "./App";

//styles
import "./styles/css/index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root"),
);
