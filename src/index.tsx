import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux";
import { App } from "./components/App";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
);
