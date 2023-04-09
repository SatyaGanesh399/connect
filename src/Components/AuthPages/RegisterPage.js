import React, { useState } from "react"
import styled from "styled-components"
import { colors } from "../../colors"

import { Typography, Button } from "antd"
import { Form, Input, FloatButton, Upload } from "antd"
import { FiChevronLeft } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import ImgCrop from "antd-img-crop"

const { Title } = Typography

const Container = styled.div`
  width: 100%;
  height: auto;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
`

const InnerContainer = styled.div`
  width: 500px;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
  width: 150px;
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

const ImageContainer = styled(Upload)`
  width: 100px !important;
  margin: 20px auto;
`

function RegisterPage() {
  const Navigate = useNavigate()
  const [form] = Form.useForm()
  const [formLayout, setFormLayout] = useState("horizontal")
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout)
  }

  // image upload handlers

  const [fileList, setFileList] = useState("")

  // const onChange = ({ fileList: newFileList }) => {
  //   setFileList(newFileList)
  // }
  const onChange = (e) => {
    setFileList({
      image: e.target.files[0],
    })
  }
  console.log("fileListontop", fileList)
  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  const onFinish = async ({
    username,
    password,
    emailId,
    city,
    country,
    phoneNumber,
  }) => {
    const formData = new FormData()
    formData.append("avatar", fileList.image)
    formData.append("username", username)
    formData.append("password", password)
    formData.append("emailId", emailId)
    formData.append("city", city)
    formData.append("country", country)
    formData.append("phoneNumber", phoneNumber)
    const config = {
      headers: { "content-type": "multipart/form-data" },
    }

    try {
      let response = await axios.post(
        "http://localhost:8000/auth/signup",
        formData,
        config
      )
      console.log(response)
      if (response.data.status === 200) {
        alert(response.data.message)
        Navigate("/login")
      }
    } catch (error) {
      alert("error occured while registration", error)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
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

  return (
    <Container>
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
            REGISTER
          </Title>
        </Header>
        {/* <ImgCrop rotationSlider fillColor={colors.dark}>
          <ImageContainer
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 1 && "+ Upload"}
          </ImageContainer>
        </ImgCrop> */}
        <input type="file" onChange={onChange} />
        <Form
          name="basic"
          {...formItemLayout}
          layout={formLayout}
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 400 }}
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
            label="Email Id"
            name="emailId"
            rules={[{ message: "Please input your email id!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ message: "Please input your phone number!" }]}
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
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ message: "Password and confirm password should match" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ message: "Please input your city!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[{ message: "Please input your Country!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <ButtonComp type="secondary" htmlType="submit">
              Submit
            </ButtonComp>
          </Form.Item>
        </Form>
        <Button
          type="text"
          style={{ color: colors.secondary, margin: 20 }}
          onClick={() => Navigate("/login")}
        >
          i've an account. i would like to sign in
        </Button>
      </InnerContainer>
    </Container>
  )
}

export default RegisterPage
