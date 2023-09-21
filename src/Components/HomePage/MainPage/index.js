import React, { useEffect, useState } from "react"
import {
  HomeFilled,
  MessageFilled,
  UserOutlined,
  NotificationFilled,
  SettingFilled,
} from "@ant-design/icons"
import { Outlet } from "react-router-dom"
import { colors } from "../../../colors"
import { useNavigate } from "react-router-dom"
import "./index.css"

import { Avatar, Layout, Menu, Space, theme, Typography } from "antd"

const { Header, Content, Sider } = Layout

const MainPage = () => {
  const Navigate = useNavigate()

  return (
    <Layout style={{ width: "100%", minHeight: "100vh" }}>
      <Header
        className="header"
        style={{
          backgroundColor: colors.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography.Title
          onClick={() => Navigate(`/home`)}
          style={{
            fontSize: "1.8rem",
            fontWeight: "500",
            textAlign: "center",
            color: "white",
            margin: 10,
            cursor: "pointer",
          }}
        >
          Connect
        </Typography.Title>

        <Space>
          <Space style={{ marginRight: 30 }}>
            <a onClick={() => Navigate(`/home`)}>
              <HomeFilled className="icon" />
            </a>
            <a onClick={() => Navigate(`/home/messages`)}>
              <MessageFilled className="icon" />
            </a>
            <a onClick={() => Navigate(`/home/notifications`)}>
              <NotificationFilled className="icon" />
            </a>
            <a onClick={() => Navigate(`/home/profileSettings`)}>
              <SettingFilled className="icon" />
            </a>
          </Space>
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
      <Layout style={{ padding: "14px 0px 0px 14px" }}>
        <Content
          style={{
            margin: 0,
            minHeight: 280,
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainPage
