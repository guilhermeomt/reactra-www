import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#a7c749",
      200: "#96b342",
      300: "#85a03b",
      400: "#738d34",
      500: "#627a2d",
      600: "#516726",
      700: "#40541f",
      800: "#2f4118",
      900: "#1e2e11",
    },
    accent: {
      100: "#3a8397",
      200: "#347688",
      300: "#2e6989",
      400: "#285b7a",
      500: "#224d6b",
      600: "#1c3f5c",
      700: "#162f4d",
      800: "#10203e",
      900: "#0c1a1e",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
