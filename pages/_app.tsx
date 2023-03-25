import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CoreBlockchain } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={ CoreBlockchain }>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
