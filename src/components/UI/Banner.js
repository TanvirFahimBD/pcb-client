import { Col, Row, Carousel } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const Banner = () => (
  <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
    {/* slider-1 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            LET&apos;S BUILD
            <br />
            Dream PC
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              color: "gray",
              margin: "10px 0px",
            }}
          >
            <span>
              <CalendarOutlined /> New Product
            </span>
            <span>
              <CommentOutlined /> Free Shipping
            </span>
            <span>
              <ProfileOutlined /> Holiday offer
            </span>
          </p>

          <p style={{ fontSize: "20px" }}>
            A personal computer, commonly abbreviated as "PC," is a versatile
            electronic device designed to be used by an individual for various
            computing tasks. PCs come in various forms, including desktop
            computers, laptops, and smaller form factors like mini PCs. Here are
            some key characteristics and components of a typical PC...
          </p>
          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
            }}
          >
            Find Yours <ArrowRightOutlined />
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image
            src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
            fill
            alt="drawing_image"
          />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            Digital Era, Started
            <br />
            Go Ahead
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              color: "gray",
              margin: "10px 0px",
            }}
          >
            <span>
              <CalendarOutlined /> Free Shipping
            </span>
            <span>
              <CommentOutlined /> Holiday offer
            </span>
            <span>
              <ProfileOutlined /> New Product
            </span>
          </p>

          <p style={{ fontSize: "20px" }}>
            A personal computer, commonly abbreviated as "PC," is a versatile
            electronic device designed to be used by an individual for various
            computing tasks. PCs come in various forms, including desktop
            computers, laptops, and smaller form factors like mini PCs. Here are
            some key characteristics and components of a typical PC...
          </p>
          <p
            style={{
              fontSize: "20px",
              margin: "20px 0px",
              backgroundColor: "black",
              color: "white",
              width: "168px",
              padding: "2px 5px ",
              fontWeight: "300",
              letterSpacing: "3px",
            }}
          >
            Find Yours
            <ArrowRightOutlined />
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image
            src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBjfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            fill
            alt="eagle_image"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div>
  </Carousel>
);
export default Banner;
