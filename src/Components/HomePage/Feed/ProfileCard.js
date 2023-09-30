import React from "react"
import avatar from "./Assets/avatar.jpg"
import { Space, Typography, Button } from "antd"
import styled from "styled-components"
const { Text } = Typography

const SideProfileCards = styled(Space)`
  margin: 0px auto;
  padding: 20px;
  background: white;
  width: 300px;
  border-radius: 10px;
  @media (max-width: 760px) {
    display: none;
  }
`
const CardProfile = styled(Space)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const ProfileImage = styled(Space)`
  margin: auto;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
`
const TextContainer = styled(Space)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
`
const ProfileTitle = styled(Text)`
  width: 100%;
  line-height: 1.1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  opacity: 0.8;
`

const ProfileText = styled(Text)`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  opacity: 0.6;
`
const FollowingContainer = styled(Space)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const FollowingTitle = styled(Text)`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 0.9rem;
  text-align: center;
`
const FollowingCount = styled(Text)`
  width: 100%;
  font-size: 0.8rem;
  line-height: 0.9rem;
  opacity: 0.8;
  text-align: center;
`
const EditButton = styled(Button)`
  margin-top: 25px;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const ProfileCard = () => {
  return (
    <SideProfileCards>
      <CardProfile>
        <ProfileImage>
          <img src={avatar} />
        </ProfileImage>
        <TextContainer>
          <ProfileTitle>Satya Ganesh</ProfileTitle>
          <ProfileText>Full Stack Developer</ProfileText>
        </TextContainer>
        <FollowingContainer>
          <TextContainer>
            <FollowingTitle>Followers</FollowingTitle>
            <FollowingCount>100</FollowingCount>
          </TextContainer>
          <TextContainer>
            <FollowingTitle>Following</FollowingTitle>
            <FollowingCount>100</FollowingCount>
          </TextContainer>
          <TextContainer>
            <FollowingTitle>Friends</FollowingTitle>
            <FollowingCount>100</FollowingCount>
          </TextContainer>
        </FollowingContainer>
        <EditButton>Edit Profile</EditButton>
      </CardProfile>
    </SideProfileCards>
  )
}

export default ProfileCard
