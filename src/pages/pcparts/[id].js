import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import React from "react";
import { Col, Row } from "antd";

const style = {
  padding: "10px",
  margin: "10px",
};

const SinglePCPart = ({ singlePart }) => {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={12}>
        <Image style={style} src={singlePart.image} width={400} height={400} />
      </Col>
      <Col className="gutter-row" span={12}>
        <h1 style={style}> {singlePart.name}</h1>
        <p> Category: {singlePart.category.toUpperCase()}</p>
        <p> {singlePart.status}</p>
        <p>Price: ${singlePart.price}</p>
        <h2>key Features</h2>
        <ol>
          {singlePart.keyFeatures.map((p) => (
            <li>{p}</li>
          ))}
        </ol>
        <p> {singlePart.description}</p>
        <hr />
        <p>Individual Rating: {singlePart.individualRating}</p>
        <p>Average Rating: {singlePart.rating}</p>
        <hr />
        <h3>Reviews</h3>
        <ul style={style}>
          {singlePart.reviews.map((review) => (
            <li>{review}</li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default SinglePCPart;

SinglePCPart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pcb-server.vercel.app/pcparts");
  const pcPartsData = await res.json();

  const paths = pcPartsData?.data.map((pc) => ({
    params: {
      id: pc._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://pcb-server.vercel.app/pcparts/${params.id}`);
  const singlePart = await res.json();

  return {
    props: {
      singlePart,
    },
  };
};
