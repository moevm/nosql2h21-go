/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import type { AppProps } from 'next/app'
import '../styles/globals.css'

// MUI
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "theme";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Custom components
import AlertManager from "components/AlertManager";
import LayoutHeader from "../components/LayoutHeader";
import LayoutFooter from "../components/LayoutFooter";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Go viewer</title>
                <meta name="description" content="Go viewer for replays" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="favicon.ico" />

                <script type="text/javascript" src="/wgo.min.js"></script>
                <script type="text/javascript" src="/wgo.player.min.js"></script>
                <link rel="stylesheet" type="text/css" href="/wgo.player.css" />

            </Head>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <LayoutHeader />
                <Component {...pageProps} />
                <AlertManager />
            </ThemeProvider>
        </>
    );
}

export default MyApp
