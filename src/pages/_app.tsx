import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                color: "#FFFFFF",
                bg: "BackBlue"
            }
        }
    },
    colors: {
        BackBlue: "#4f5ac0",
        AltBlue: "#3a4196"
    }
});

export default function App({ Component, pageProps }: AppProps) {
    return (
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
    );
}
