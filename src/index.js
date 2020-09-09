import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import DBService from "./services/db-service";

const dbService = new DBService();

dbService.getItems();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
