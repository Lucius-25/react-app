import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDom.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
