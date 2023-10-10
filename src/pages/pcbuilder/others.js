import RootLayout from "@/components/Layouts/RootLayout";
import PCPartsSelect from "@/components/UI/PCPartsSelect";
import React from "react";

const CPUPage = ({ pcPartsData }) => {
  return (
    <div>
      <PCPartsSelect pcPartsData={pcPartsData} select={"others"} />
    </div>
  );
};
export default CPUPage;

CPUPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pcb-server.vercel.app/pcparts/category/others"
  );
  const pcPartsData = await res.json();
  return {
    props: {
      pcPartsData,
    },
  };
};
