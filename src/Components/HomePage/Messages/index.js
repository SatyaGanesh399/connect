import React, { useEffect, useState } from "react"
import { Avatar, Button, List, Skeleton, Space, Card, Input } from "antd"
import { colors } from "../../../colors"
import styled from "styled-components"
import { EditOutlined } from "@ant-design/icons"

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`

const ChatBox = styled(Card)`
  width: 500px;
  height: 600px;
  position: relative;
`
const TextSubmit = styled(Space.Compact)`
  width: 98%;
  position: absolute;
  bottom: 10px;
  left: 4px;
  margin: 5px auto;
`

const count = 8
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`
function Messages() {
  const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false)
        setData(res.results)
        setList(res.results)
      })
  }, [])

  const onLoadMore = () => {
    setLoading(true)
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    )
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results)
        setData(newData)
        setList(newData)
        setLoading(false)
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event("resize"))
      })
  }

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null
  return (
    <OuterContainer>
      <Space
        size="medium"
        direction="vertical"
        style={{
          width: "100%",
          padding: 20,
          backgroundColor: colors.white,
        }}
      >
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          style={{ width: "100%", borderRadius: 20 }}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button type="link">reply</Button>,
                <Button type="link" danger>
                  mark as read
                </Button>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name?.last}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Space>
      <ChatBox
        title="Chatbox"
        extra={
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
          >
            <EditOutlined size={20} /> new message
          </span>
        }
      >
        <TextSubmit>
          <Input placeholder="Enter text" />
          <Button type="default">Submit</Button>
        </TextSubmit>
      </ChatBox>
    </OuterContainer>
  )
}

export default Messages
