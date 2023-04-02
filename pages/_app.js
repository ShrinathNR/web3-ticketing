import "../styles/globals.css";
import Head from "next/head";
import HeaderResponsive from "../components/Navbar";
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="title" content="0xticket | hackNight Hackathon" />
        <meta name="description" content="Winning Project of the 2-day on-campus hackathon at Vellore Institute of Technology, ChennaiTeam Members - Siddharth Suresh, Shreyas Sai, Shrinath NR" />
        <meta name="keywords" content="Siddharth Suresh, Shreyas Sai, Shrinath, hackNight, Hackathon Winners, Vellore Institute of Technology, Chennai, " />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Siddharth Suresh, Shreyas Sai, Shrinath NR" />
        <link rel="shortcut icon" href="/icon.ico" />
      </Head>
      <div className="!bg-[#1A1A40] h-full min-h-screen">
        <MantineProvider theme={{ colorScheme: 'dark' }}>
          <NotificationsProvider>
            <div className="p-5">
              <HeaderResponsive />
            </div>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </div>
    </>
  );
}

