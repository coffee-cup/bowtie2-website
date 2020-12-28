import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "../styles/tailwind.css";
import "../styles/custom-styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
