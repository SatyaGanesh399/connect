import React, { useEffect, useState } from "react"
import {
  HomeFilled,
  MessageFilled,
  UserOutlined,
  NotificationFilled,
  SettingFilled,
  LogoutOutlined,
  PhoneFilled,
} from "@ant-design/icons"
import { Outlet } from "react-router-dom"
import { colors } from "../../../colors"
import { useNavigate } from "react-router-dom"
import "./index.css"

import { Avatar, Layout, Menu, Space, theme, Typography, Dropdown } from "antd"
import styled from "styled-components"

const { Header, Content, Sider } = Layout

const ContentContainer = styled(Content)`
  margin: 0;
  min-height: 280;
  width: "85%";
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    width: 95%;
  }
`
const DropDownText = styled(Typography)`
  font-weight: 500;
  color: black;
  opacity: 0.7;
`

const MainPage = () => {
  const Navigate = useNavigate()
  const items = [
    {
      label: <DropDownText>Profile Settings</DropDownText>,
      key: "0",
      icon: <UserOutlined style={{ fontSize: 18 }} />,
    },
    {
      label: <DropDownText>Support</DropDownText>,
      key: "1",
      icon: <PhoneFilled style={{ fontSize: 18 }} />,
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      key: "3",
      icon: <LogoutOutlined style={{ fontSize: 18 }} />,
      danger: true,
      onClick: () => Navigate(`/`),
    },
  ]

  return (
    <Layout style={{ width: "100%", minHeight: "100vh" }}>
      <Header
        className="header"
        style={{
          backgroundColor: colors.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 3,
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
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
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
          </Dropdown>
        </Space>
      </Header>
      <Layout style={{ padding: "14px 0px 0px 14px" }}>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Layout>
    </Layout>
  )
}

export default MainPage
