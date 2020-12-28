import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "../styles/tailwind.css";
import "../styles/custom-styles.css";
import { useFathom } from "../hooks/useFathom";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useFathom("QNCIBBSP", "bowtie.cards");

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
