import React from "react"
import { Avatar, Card, Space, Typography, Input, Upload, Button } from "antd"
import styled from "styled-components"
import { colors } from "../../../colors"
import { UploadOutlined } from "@ant-design/icons"
import avatar from "../Feed/Assets/avatar.jpg"
const { TextArea } = Input

const CardContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  margin: 20px 0px;
`
const CardComp = styled(Card)`
  padding: 10px;
`
const TopPart = styled.div`
display : flex;
align-items : center;
justify-content flex-start;
gap : 20px; 
margin : 10px;
`
const BottomPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`
const PostButton = styled.button`
  padding: 5px 15px;
  background-color: ${colors.secondary};
  border-radius: 5px;
  color: ${colors.white};
`

function index() {
  return (
    <CardContainer>
      <CardComp bordered={false}>
        <TopPart>
          <Avatar size={30} src={avatar} />
        </TopPart>
        <TextArea
          showCount
          maxLength={100}
          style={{ height: 120, marginBottom: 24 }}
          //   onChange={onChange}
          placeholder="Share your thoughts here.."
        />
        <BottomPart>
          <div>
            <Upload>
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </div>
          <PostButton>Post</PostButton>
        </BottomPart>
      </CardComp>
    </CardContainer>
  )
}

export default index
