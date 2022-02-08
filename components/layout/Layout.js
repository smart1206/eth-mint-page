import Header from "./Header";
import Footer from "./Footer";

import Head from "next/head";

const Layout = ({ children, title, description, ogImage, url, account, onConnect }) => {
  // website Url
  const pageUrl =
    "https://nextjs-and-material-ui-template-with-header-and-footer.vercel.app/";
  // when you share this page on facebook you'll see this image
  const ogImg = "https://i.imgur.com/1H2TK2B.png";
  return (
    <>
      <Head>
        <title>
          {title
            ? title
            : "Template - Next.js and Material-UI with Header and Footer"}
        </title>
        <meta
          name="description"
          key="description"
          content={
            description
              ? description
              : "This is a Template using Next.js and Material-UI with Header and Footer."
          }
        />
        <meta
          property="og:title"
          content={
            title
              ? title
              : "Template - Next.js and Material-UI with Header and Footer"
          }
          key="og:title"
        />
        <meta property="og:url" content={url ? url : pageUrl} key="og:url" />
        <meta
          property="og:image"
          content={ogImage ? ogImage : ogImg}
          key="og:image"
        />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "This is a Template using Next.js and Material-UI with Header and Footer."
          }
          key="og:description"
        />
      </Head>
      <Header account={account} onConnect={onConnect}/>
      <main>{children}</main>
      <Footer />
      <style jsx global>
        {`
          @font-face {
            font-family: 'Gotham Rounded';
            src: url('fonts/Gotham-Rounded-Bold.woff') format('opentype');
            font-style: normal;
            font-weight: normal;
            text-rendering: optimizeLegibility;
          }
          html,
          body {
            background-image: url(bg.svg);
            background-position: center top;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
