import React, { useEffect, useState } from "react"
import {
  HomeOutlined,
  NotificationOutlined,
  UserOutlined,
  MessageOutlined,
  FileImageOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons"
import { Outlet } from "react-router-dom"
import { colors } from "../../../colors"
import { useNavigate } from "react-router-dom"

import { Avatar, Layout, Menu, Space, theme, Typography } from "antd"

const { Header, Content, Sider } = Layout

const items2 = [
  {
    icon: <HomeOutlined />,
    key: "feed",
    label: "Home",
  },
  {
    icon: <MessageOutlined />,
    key: "messages",
    label: "Messages",
  },
  {
    icon: <FileImageOutlined />,
    key: "posts",
    label: "My Posts",
  },
  {
    icon: <NotificationOutlined />,
    key: "notifications",
    label: "Notifications",
  },
  {
    icon: <MenuUnfoldOutlined />,
    key: "profileSettings",
    label: "Settings",
  },
]

const MainPage = () => {
  const [selectedKey, setSelectedKey] = useState(["feed"])
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const Navigate = useNavigate()
  const onClick = (e) => {
    setSelectedKey([e.key])
    if (e.key === "feed") {
      Navigate(`/home`)
    } else {
      Navigate(`/home/${e.key}`)
    }
  }

  return (
    <Layout style={{ width: "100%", minHeight: "100vh" }}>
      <Header
        className="header"
        style={{
          backgroundColor: colors.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography.Title
          style={{
            fontSize: "1.8rem",
            fontWeight: "500",
            textAlign: "center",
            color: "white",
            margin: 10,
          }}
        >
          Connect
        </Typography.Title>
        <Space style={{ position: "absolute", right: 20, top: 12 }}>
          <Avatar
            size={40}
            icon={<UserOutlined style={{ color: colors.dark }} />}
            style={{
              cursor: "pointer",
              backgroundColor: colors.background,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Space>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            onClick={onClick}
            defaultSelectedKeys={selectedKey}
            defaultOpenKeys={"home"}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "14px 0px 0px 14px" }}>
          <Content
            style={{
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MainPage
