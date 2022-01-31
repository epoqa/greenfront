import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NotificationContainer } from "../src/components/Notifications/Notifications";
import { createStore, compose } from "redux";
import allReducer from "../src/redux/reducers/reducer";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
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

const store = createStore(allReducer, composeEnhancers());


// const loggedIn = () => {
//   return {
//     type: "LOGGEDIN",
//   }
// }

// const loggedOut = () => {
//   return {
//     type: "LOGGEDOUT",
//   }
// }

// const userStatus = (state = false, action) => {
//   switch (action.type) {
//     case "LOGGEDIN":
//       return true;
//     case "LOGGEDOUT":
//       return false;
//     default:
//       return state;
//   }

// }



// userStatusStore.dispatch(loggedIn());

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
