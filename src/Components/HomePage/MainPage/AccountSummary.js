import React from "react"
import { Card, Row, Avatar, Typography } from "antd"
import styled from "styled-components"
import { colors } from "../../../colors"

const CardContainer = styled(Card)`
  width: 100%;
  height: 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`
const AvatarTitle = styled(Typography.Text)`
  font-size: 1.1rem;
  font-weight: 500;
`

function AccountSummary() {
  return (
    <CardContainer>
      <RowContainer>
        <Avatar
          style={{ backgroundColor: colors.secondary, verticalAlign: "middle" }}
          size="large"
          gap={20}
        >
          U
        </Avatar>
        <AvatarTitle>Uma Mahesh</AvatarTitle>
      </RowContainer>
    </CardContainer>
  )
}

export default AccountSummary
