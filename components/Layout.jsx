import Head from "next/head";
import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import Footer from "../components/Footer";
import Navbar from "./Navbar";
export default function Layout({ pageTitle, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle ? pageTitle : "Programming with Mahbub"}</title>
      </Head>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
      <MessengerCustomerChat pageId="101662155928902" appId="544636930371459" />
    </React.Fragment>
  );
}
