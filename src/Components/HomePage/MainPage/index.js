import React from "react"
import styled from "styled-components"
import HomeScreenPost from "../HomeScreenPost"
import Feed from "../Feed"
import { colors } from "../../../colors"
import AccountSummary from "./AccountSummary"

const MainPageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.03);
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.6fr;
  grid-template-rows: 1fr;
  gap: 30px;
`

function index() {
  return (
    <MainPageContainer>
      <AccountSummary />
      <div>
        <HomeScreenPost />
        <Feed />
      </div>
      <div></div>
    </MainPageContainer>
  )
}

export default index
