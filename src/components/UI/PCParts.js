import React from "react";
import { Col, Row } from "antd";
import { Card } from "antd";
import Link from "next/link";
import Image from "next/image";

const { Meta } = Card;

const PCParts = ({ pcPartsData }) => {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      {pcPartsData?.map((pcpart) => (
        <Link href={`pcparts/${pcpart._id}`}>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                width: 200,
                margin: "30px",
                padding: "10px",
              }}
              cover={
                <Image
                  alt="example"
                  src={pcpart.image}
                  width={200}
                  height={200}
                />
              }
            >
              <Meta
                title={pcpart.name}
                description={pcpart.description.slice(0, 40)}
              />
              <p>{pcpart.category.toUpperCase()}</p>
              <p>${pcpart.price}</p>
              <small>{pcpart.status}</small> <br />
              <small>Rating: {pcpart.rating}</small> <br />
            </Card>
          </Col>
        </Link>
      ))}
    </Row>
  );
};

export default PCParts;
