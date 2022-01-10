import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NotificationContainer } from "../src/components/Notifications/Notifications";
import { createStore, compose } from "redux";
import { counterReducer } from "../src/redux/reducers/reducer";
import { Provider } from "react-redux";

//REDUX
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(counterReducer, composeEnhancers());
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <NotificationContainer />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
