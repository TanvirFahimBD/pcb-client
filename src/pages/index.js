import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import PCParts from "@/components/UI/PCParts";
import Banner from "@/components/UI/Banner";

const HomePage = ({ pcPartsData }) => {
  return (
    <>
      <Head>
        <title>PC Builder</title>
        <meta name="description" content="This is pc builder made by next-js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <h1 style={{ textAlign: "center" }}>Featured PC Parts</h1>
      <PCParts pcPartsData={pcPartsData} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("https://pcb-server.vercel.app/pcparts/featured");
  const pcPartsData = await res.json();
  console.log(pcPartsData);

  return {
    props: {
      pcPartsData: pcPartsData,
    },
  };
};
