import React from "react";
import { Col, Row } from "antd";
import { Card } from "antd";
import Link from "next/link";
import Image from "next/image";
import { Button, Space } from "antd";
import { useDispatch } from "react-redux";
import {
  selectCpu,
  selectMonitor,
  selectMotherboard,
  selectOthers,
  selectPowerSupply,
  selectRam,
  selectStorage,
} from "@/redux/features/selectPartsSlice";
import { useRouter } from "next/router";

const { Meta } = Card;

const PCPartsSelect = ({ pcPartsData, select }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSelect = (pcpart) => {
    if (select === "cpu") {
      dispatch(selectCpu(pcpart));
    }
    if (select === "motherboard") {
      dispatch(selectMotherboard(pcpart));
    }
    if (select === "ram") {
      dispatch(selectRam(pcpart));
    }
    if (select === "power_supply") {
      dispatch(selectPowerSupply(pcpart));
    }
    if (select === "storage") {
      dispatch(selectStorage(pcpart));
    }
    if (select === "monitor") {
      dispatch(selectMonitor(pcpart));
    }
    if (select === "others") {
      dispatch(selectOthers(pcpart));
    }
    router.push("/pcbuilder");
  };

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
            {select && (
              <Button
                type="primary"
                style={{ marginTop: "20px" }}
                onClick={() => handleSelect(pcpart)}
              >
                Add
              </Button>
            )}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PCPartsSelect;
