import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { colors } from "../../colors"

import { Typography, Button } from "antd"
import { Form, Input, FloatButton, Upload, Modal, message } from "antd"
import { PlusOutlined } from "@ant-design/icons"
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

function RegisterPage() {
  const Navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()
  const [form] = Form.useForm()
  const [formLayout, setFormLayout] = useState("horizontal")
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout)
  }

  // image upload handlers

  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState("")
  const [previewTitle, setPreviewTitle] = useState("")
  const [fileList, setFileList] = useState([])

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    )
  }

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  // Api Call function handler

  const onFinish = async ({
    username,
    password,
    emailId,
    city,
    country,
    phoneNumber,
  }) => {
    const formData = new FormData()
    if (fileList && fileList.length > 0) {
      formData.append("avatar", fileList[0].originFileObj)
    }
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
        await messageApi.open({
          duration: 1,
          type: "success",
          content: response.data.message,
        })
        Navigate("/login")
      } else {
        messageApi.open({
          type: "error",
          content: response.data.message,
        })
      }
    } catch (error) {
      messageApi.open({
        duration: 1,
        type: "error",
        content: error,
      })
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
            REGISTER
          </Title>
        </Header>
        <ImageContainer
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length > 0 ? null : uploadButton}
        </ImageContainer>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
        {/* <input type="file" onChange={onChange} /> */}
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
