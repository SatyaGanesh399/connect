import React from "react"
import avatar from "./Assets/avatar.jpg"
import FeedImage from "./Assets/feed-image.jpg"
import { Avatar, Card, Space, Typography, Badge, Divider, Button } from "antd"
import { LikeFilled, DislikeFilled, MessageFilled } from "@ant-design/icons"
import styled from "styled-components"
import { colors } from "../../../colors"
import ProfileCard from "./ProfileCard"
import GlanceCards from "./GlanceCards"

const { Text, Link } = Typography
const feed = [
  {
    id: "1",
    avatar: avatar,
    name: "Sam Martin",
    location: "California, US",
    caption: "Morning Vibes!!!",
    photo: FeedImage,
    more: {
      likes: 20,
      dislike: 2,
      comment: [
        {
          id: "1",
          avatar: avatar,
          name: "Clark",
          comment: "Missing you bro!!",
        },
      ],
    },
  },
]

const FeedContainer = styled.div`
  background-color: ${colors.white};
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  flex-grow: 1;
`
const OuterContainer = styled(Space)`
  display: grid;
  grid-template-columns: 0.6fr auto 0.6fr;
  grid-template-rows: 1fr;
  align-items: flex-start;
  margin: 0px auto;
  gap: 10px;
  padding: 0px 15px 0px 0px;
`
const Container = styled(Space)`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

const ImageFeed = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`
const TopPart = styled.div`
display : flex;
align-items : center;
justify-content flex-start;
gap : 20px; 
margin : 10px;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
`

const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`
const MoreItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  margin: 10px;
  color: ${colors.dark};
  font-size: 18px;
  font-weight: 600;
`
const NotificationCard = styled(Card)`
  p {
    margin: 5px;
  }
`
const AntDivider = styled(Divider)`
  margin: 5px;
`
const SideCards = styled(Space)`
  margin: 0px auto;
`
const SideProfileCards = styled(Space)`
  margin: 0px auto;
  padding: 20px;
  background: white;
  width: 300px;
  border-radius: 10px;
`

export const FeedCard = ({ item }) => {
  return (
    <FeedContainer item={item}>
      <TopPart>
        <div>
          <Avatar size={50} src={item.avatar} />
        </div>
        <Details>
          <Link>{item.name}</Link>
          <Text type="secondary">{item.location}</Text>
        </Details>
      </TopPart>
      <ImageFeed src={item.photo} alt="" width="400px" height="500px" />
      <More>
        <MoreItem>
          <LikeFilled
            style={{
              fontSize: "20px",
              color: colors.darkGrey,
              cursor: "pointer",
            }}
          />
          {item.more.likes}
        </MoreItem>
        <MoreItem>
          <DislikeFilled
            style={{
              fontSize: "20px",
              color: colors.darkGrey,
              cursor: "pointer",
            }}
          />
          {item.more.dislike}
        </MoreItem>
        <MoreItem>
          <MessageFilled
            style={{
              fontSize: "20px",
              color: colors.darkGrey,
              cursor: "pointer",
            }}
          />
          {item.more.comment.length}
        </MoreItem>
      </More>
    </FeedContainer>
  )
}

function index() {
  return (
    <OuterContainer>
      <ProfileCard />
      <Container>
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
      </Container>
      <GlanceCards />
    </OuterContainer>
  )
}

export default index
