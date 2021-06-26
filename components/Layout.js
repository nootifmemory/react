import Header from "./Header";
import Loading from "./Loading";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import Router from "next/router";
import WaveBottom from "./WaveBottom";
import WaveTop from "./WaveTop";
import lozad from "lozad";
import ImgList from "./ImgList";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Head from "next/head";

// Random Function

export default function Layout({ children, postCount, tagsCount, data, img }) {
  // Loading Screen
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const start = () => setIsLoading(true);
    const end = () => setIsLoading(false);
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [isLoading]);

  // ------------ LozadJs Observe ------------//
  useEffect(() => {
    const lazyload = lozad("img, [data-background-image]", {
      loaded: function (el) {
        el.addClass("lozaded");
      },
    });
    lazyload.observe();
  }, []);
  return (
    // return content
    <>
      <Head>
        <Header />
      </Head>
      <div id="container">
        <NavBar />
        <ImgList img={img} />
        <WaveBottom />
        <main>
          <div className="inner">
            <div id="main" className="pjax">
              {isLoading ? <Loading /> : children}
            </div>
            <Sidebar value={postCount} tag={tagsCount} />
            <div className="dimmer"></div>
          </div>
        </main>
        <Footer data={data} />
      </div>
    </>
  );
}
