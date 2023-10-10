import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: <Link href="/cpu">CPU</Link>,
    key: "0",
  },
  {
    label: <Link href="/motherboard">Motherboard</Link>,
    key: "1",
  },
  {
    label: <Link href="/ram">Ram</Link>,
    key: "2",
  },
  {
    label: <Link href="/powersupply">Power Supply</Link>,
    key: "3",
  },
  {
    label: <Link href="/storage">Storage</Link>,
    key: "4",
  },
  {
    label: <Link href="/monitor">Monitor</Link>,
    key: "5",
  },
  {
    label: <Link href="/others">Others</Link>,
    key: "6",
  },
];

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PC BUILDER
            </Link>
          </h1>
        </div>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Categories
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Menu theme="dark" mode="vertical">
          <Link href="/pcbuilder">
            <items>
              <MobileOutlined />
              PC BUILDER
            </items>
          </Link>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC BUILDER
        </h2>
        <p>
          <Link href="https://www.facebook.com">
            <FacebookFilled />
          </Link>
          <Link href="https://www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://google.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        PC builder ©2023
      </Footer>
    </Layout>
  );
};
export default RootLayout;
