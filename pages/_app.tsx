import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NotificationContainer } from "../src/components/Notifications/Notifications";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NotificationContainer />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
