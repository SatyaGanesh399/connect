import React from "react"
import avatar from "../Feed/Assets/avatar.jpg"
import FeedImage from "../Feed/Assets/feed-image.jpg"
import { Avatar, Card, Space, Typography, Badge, Divider } from "antd"
import {
  LikeFilled,
  DislikeFilled,
  MessageFilled,
  StarFilled,
} from "@ant-design/icons"
import styled from "styled-components"
import { colors } from "../../../colors"
import MakePost from "../MakePost"

import { Line } from "@ant-design/charts"

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
  grid-template-columns: 1.5fr 0.5fr;
  grid-template-rows: 1fr;
  align-items: flex-start;
  margin: 0px auto;
  gap: 10px;
  padding: 0px 15px 0px 0px;
`
const Container = styled(Space)`
  width: 100%;
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

const { Text, Link } = Typography

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
  const data = [
    { week: "1", posts: 8 },
    { week: "2", posts: 12 },
    { week: "3", posts: 10 },
    { week: "4", posts: 12 },
    { week: "5", posts: 15 },
  ]

  const config = {
    data,
    height: 200,
    xField: "week",
    yField: "posts",
    point: {
      size: 5,
      shape: "diamond",
    },
  }

  return (
    <OuterContainer>
      <Container>
        <MakePost />
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
        <FeedCard item={feed[0]} />
      </Container>
      <Space size="small" direction="vertical">
        <NotificationCard
          title="Weekly Streak of Posts"
          style={{
            width: 300,
            height: 295,
          }}
        >
          <Line {...config} />
        </NotificationCard>
        <NotificationCard
          title="Total Streak"
          style={{
            width: 300,
          }}
        >
          <Space
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 20px",
            }}
          >
            <StarFilled style={{ fontSize: 40, color: "#FFD700" }} />
            <span
              style={{
                fontSize: 30,
                fontWeight: "500",
                color: colors.secondary,
              }}
            >
              368
            </span>
          </Space>
        </NotificationCard>
        <NotificationCard
          title="Profile Summary"
          extra={<a href="#">Show All</a>}
          style={{
            width: 300,
          }}
        >
          <p>Total Posts : 105</p>
          <AntDivider />
          <p>Highest Likes : 2500</p>
          <AntDivider />
          <p>Highest Comments : 120</p>
        </NotificationCard>
      </Space>
    </OuterContainer>
  )
}

export default index
