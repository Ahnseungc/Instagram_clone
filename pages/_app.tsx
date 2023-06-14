import { useEffect } from "react";

import { useRouter } from "next/router";
import "../styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.replace("/home");
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
