import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

console.log("react version", React.version); //18.00
console.log("react dom version", ReactDOM.version); //18.00

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);
root.render(<App />);
