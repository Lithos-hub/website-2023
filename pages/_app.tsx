import { ThemeProvider } from "@mui/material";
import { mainTheme } from "@/themes";

import "@/styles/globals.css";
import "@/sass/index.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
