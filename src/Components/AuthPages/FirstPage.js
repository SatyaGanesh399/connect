import React from "react"
import styled from "styled-components"
import { Typography, Button } from "antd"
import { DownloadOutlined } from "@ant-design/icons"
import { colors } from "../../colors"
import { useNavigate } from "react-router-dom"

import Friends from "./Assets/funky.jpg"

const { Title, Text } = Typography

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerContainer = styled.div`
  width: 35%;
  height: 100vh;
  padding: 40px;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`
const ButtonContainer = styled.div`
  width: 300px;
  margin: 5px auto;
  padding: 12px;
  background-color: ${colors.primary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    margin: 0;
    color: ${colors.white};
    font-size: 1.1rem;
    font-weight: 500;
  }
  &:hover {
    opacity: 0.8;
  }
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`
const ImageContainer = styled.div`
  width: 65%;
  height: 100vh;
`

const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

function FirstPage() {
  const Navigate = useNavigate()
  return (
    <Container>
      <ImageContainer>
        <Img src={Friends} />
      </ImageContainer>
      <InnerContainer>
        <Header>
          <Title
            style={{
              fontWeight: "700",
              fontSize: "3rem",
              color: colors.white,
            }}
          >
            CONNECT
          </Title>
          <Text
            style={{
              fontWeight: "300",
              fontSize: "0.8rem",
              color: colors.white,
              marginTop: "-20px",
            }}
          >
            Stay connected with your loved ones
          </Text>
        </Header>
        <Header>
          <ButtonContainer onClick={() => Navigate("/login")}>
            <p>Login</p>
          </ButtonContainer>
          <ButtonContainer onClick={() => Navigate("/register")}>
            <p>Register</p>
          </ButtonContainer>
        </Header>
      </InnerContainer>
    </Container>
  )
}

export default FirstPage
