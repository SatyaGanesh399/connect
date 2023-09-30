import React from "react"
import { Card, Space, Typography, Badge, Divider } from "antd"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const SideCardContainer = styled(Space)`
  @media (max-width: 1100px) {
    display: none;
  }
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

function GlanceCards() {
  const Navigate = useNavigate()
  return (
    <SideCardContainer>
      <SideCards size="small" direction="vertical">
        <Badge count={5}>
          <NotificationCard
            title="New Messages"
            extra={<a href="#">Show All</a>}
            style={{
              width: 300,
            }}
            onClick={() => Navigate(`/home/messages`)}
          >
            <p>New Message from Praveen Kumar</p>
            <AntDivider />
            <p>New Message from Anand_Hailstrom</p>
            <AntDivider />
            <p>New Message from Kathik N</p>
          </NotificationCard>
        </Badge>
        <Badge count={10}>
          <NotificationCard
            title="New Notifications"
            extra={<a href="#">Show All</a>}
            style={{
              width: 300,
            }}
            onClick={() => Navigate(`/home/notifications`)}
          >
            <p>Karthik commented on your post</p>
            <AntDivider />
            <p>Karthik and 20 more liked your post</p>
            <AntDivider />
            <p>Rithika and 16 more commented on your post</p>
          </NotificationCard>
        </Badge>
      </SideCards>
    </SideCardContainer>
  )
}

export default GlanceCards
