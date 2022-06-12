import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId='mEAiB0m5g6TxtsmrG17v1fHWldY1ItYDOmMKAe3p'
      serverUrl='https://u5kkn03mvzrh.usemoralis.com:2053/server'
    >
      <Component {...pageProps} />;
    </MoralisProvider>
  );
}

export default MyApp;
