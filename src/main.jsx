import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ReactDom from "react-dom/client";

ReactDom.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
