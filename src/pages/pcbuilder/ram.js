import RootLayout from "@/components/Layouts/RootLayout";
import PCPartsSelect from "@/components/UI/PCPartsSelect";
import React from "react";

const CPUPage = ({ pcPartsData }) => {
  return (
    <div>
      <PCPartsSelect pcPartsData={pcPartsData} select={"ram"} />
    </div>
  );
};
export default CPUPage;

CPUPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://pcb-server.vercel.app/pcparts/category/ram");
  const pcPartsData = await res.json();
  return {
    props: {
      pcPartsData,
    },
  };
};
