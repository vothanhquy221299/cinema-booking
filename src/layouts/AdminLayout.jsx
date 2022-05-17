import React from "react";
import { Layout, Menu } from "antd";
import { Link, Redirect } from "react-router-dom";
import {
  AppstoreOutlined,
  TeamOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import withLayout from "hocs/withLayout";
import { useSelector } from "react-redux";

const { Header, Content, Footer, Sider } = Layout;
function AdminLayout(props) {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  return currentUser.maLoaiNguoiDung === "QuanTri" ? (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo">
          <img src="./logo192.png"></img>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            <Link to="/admin">DashBoard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/admin/movie">Movie</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            <Link to="/admin/user">User</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  ) : (
    <Redirect to="/"/>
  );
}
export default withLayout(AdminLayout);
