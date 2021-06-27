import Head from "next/head";
const Header = () => (
  <>
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=2"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
    {/* <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script> */}
    {/* <script src="https://cdn.jsdelivr.net/npm/pjax@0.2.8/pjax.min.js"></script> */}
    <script src="//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.3.1/p5.min.js"></script>
    <script src="/live2d/autoload.js"></script>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/images/apple-touch-icon.png"
    ></link>
    <link
      rel="icon"
      type="image/ico"
      sizes="32x32"
      href="/images/favicon.ico"
    ></link>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="//fonts.googleapis.com/css?family=VT323:300,300italic,400,400italic,700,700italic%7CPress%20Start%202P:300,300italic,400,400italic,700,700italic%7CKarla:300,300italic,400,400italic,700,700italic%7CNoto%20Serif%20SC:300,300italic,400,400italic,700,700italic%7CInconsolata:300,300italic,400,400italic,700,700italic&display=swap&subset=latin,latin-ext"
    />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="NooTif"
      href="/rss.xml"
    />
    <link
      rel="alternate"
      type="application/atom+xml"
      title="NooTif"
      href="/atom.xml"
    />
    <link
      rel="alternate"
      type="application/json"
      title="NooTif"
      href="/feed.json"
    />
  </>
);

export default Header;