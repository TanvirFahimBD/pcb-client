import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Button } from "antd";
import { Col, Row } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";

const style = {
  padding: "20px 100px",
};

const PCBuilderPage = () => {
  const { cpu, motherboard, ram, powersupply, storage, monitor, others } =
    useSelector((state) => state.selectParts);

  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={12}>
                <p>CPU [required]</p>
              </Col>
              {cpu && (
                <Col className="gutter-row" span={12}>
                  <Image src={cpu?.image} height={50} width={50} />
                  <p>{cpu?.name?.slice(0, 40)}</p>
                  <p>${cpu?.price}</p>
                </Col>
              )}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Link href="/pcbuilder/cpu">
              <Button type="primary">Choose</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <hr />
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={12}>
                <p>Motherboard [required]</p>
              </Col>
              {motherboard && (
                <Col className="gutter-row" span={12}>
                  <Image src={motherboard?.image} height={50} width={50} />
                  <p>{motherboard?.name?.slice(0, 40)}</p>
                  <p>${motherboard?.price}</p>
                </Col>
              )}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Link href="/pcbuilder/motherboard">
              <Button type="primary">Choose</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <hr />
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={12}>
                <p>Ram [required]</p>
              </Col>
              {ram && (
                <Col className="gutter-row" span={12}>
                  <Image src={ram?.image} height={50} width={50} />
                  <p>{ram?.name?.slice(0, 40)}</p>
                  <p>${ram?.price}</p>
                </Col>
              )}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Link href="/pcbuilder/ram">
              <Button type="primary">Choose</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <hr />
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={12}>
                <p>Power Supply [required]</p>
              </Col>
              {powersupply && (
                <Col className="gutter-row" span={12}>
                  <Image src={powersupply?.image} height={50} width={50} />
                  <p>{powersupply?.name?.slice(0, 40)}</p>
                  <p>${powersupply?.price}</p>
                </Col>
              )}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Link href="/pcbuilder/powersupply">
              <Button type="primary">Choose</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <hr />
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={12}>
                <p>Storage [required]</p>
              </Col>
              {storage && (
                <Col className="gutter-row" span={12}>
                  <Image src={storage?.image} height={50} width={50} />
                  <p>{storage?.name?.slice(0, 40)}</p>
                  <p>${storage?.price}</p>
                </Col>
              )}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Link href="/pcbuilder/storage">
              <Button type="primary">Choose</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <hr />
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={12}>
                <p>Monitor [required]</p>
              </Col>
              {monitor && (
                <Col className="gutter-row" span={12}>
                  <Image src={monitor?.image} height={50} width={50} />
                  <p>{monitor?.name?.slice(0, 40)}</p>
                  <p>${monitor?.price}</p>
                </Col>
              )}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Link href="/pcbuilder/monitor">
              <Button type="primary">Choose</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <hr />
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={12}>
                <p>Others</p>
              </Col>
              {others && (
                <Col className="gutter-row" span={12}>
                  <Image src={others?.image} height={50} width={50} />
                  <p>{others?.name?.slice(0, 40)}</p>
                  <p>${others?.price}</p>
                </Col>
              )}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Link href="/pcbuilder/others">
              <Button type="primary">Choose</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <hr />
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}></Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <Button
              type="primary"
              disabled={
                !(
                  cpu &&
                  motherboard &&
                  ram &&
                  powersupply &&
                  storage &&
                  monitor &&
                  others
                ) ||
                (cpu &&
                  motherboard &&
                  ram &&
                  powersupply &&
                  storage &&
                  monitor &&
                  !others)
              }
            >
              Complete Build
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
