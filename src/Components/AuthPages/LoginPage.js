import React, { useState } from "react"
import styled from "styled-components"
import { Typography, Button } from "antd"
import { Checkbox, Form, Input, FloatButton, message } from "antd"
import { colors } from "../../colors"
import { useNavigate } from "react-router-dom"
import { FiChevronLeft } from "react-icons/fi"
import axios from "axios"

const { Title } = Typography

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerContainer = styled.div`
  width: 400px;
  padding: 40px;
  background-color: ${colors.white};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

const ButtonComp = styled(Button)`
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  color: ${colors.white};
  width: 100px;
  &:hover {
    opacity: 0.8;
    font-size: 0.9rem;
    font-weight: 500;
  }
`
const FloatingButton = styled(FloatButton)`
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  &:hover {
    svg {
      color: ${colors.white};
    }
  }
`

function LoginPage() {
  const [messageApi, contextHolder] = message.useMessage()

  const onFinish = async ({ username, password }) => {
    try {
      let response = await axios.post(DB_URL + "/auth/login", {
        username,
        password,
      })
      console.log(response)
      if (response.data.status == 200) {
        await messageApi.open({
          duration: 1,
          type: "success",
          content: response.data.message,
        })
        try {
          localStorage.setItem("token", response.data.token)
        } catch (error) {
          localStorage.setItem("token", "")
        }
        Navigate("/home")
      } else {
        messageApi.open({
          type: "error",
          content: response.data.message,
        })
      }
    } catch (error) {
      alert("error", error)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }
  const Navigate = useNavigate()

  const [form] = Form.useForm()
  const [formLayout, setFormLayout] = useState("horizontal")
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout)
  }
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null
  const buttonItemLayout =
    formLayout === "vertical"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null
  return (
    <Container>
      {contextHolder}
      <InnerContainer>
        <FloatingButton
          shape="circle"
          style={{
            top: 30,
            left: 50,
          }}
          icon={
            <FiChevronLeft
              size={30}
              color={colors.dark}
              style={{ marginLeft: "-6px" }}
            />
          }
          onClick={() => Navigate("/")}
        />
        <Header>
          <Title
            style={{
              fontWeight: "700",
              fontSize: "2rem",
              color: colors.primary,
            }}
          >
            LOGIN
          </Title>
        </Header>
        <Form
          name="basic"
          {...formItemLayout}
          layout={formLayout}
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <ButtonComp type="secondary" htmlType="submit">
              Submit
            </ButtonComp>
          </Form.Item>
        </Form>
      </InnerContainer>
    </Container>
  )
}
const DB_URL = "localhost:8080"
export { DB_URL }
export default LoginPage
