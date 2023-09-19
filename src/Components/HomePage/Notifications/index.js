import { Avatar, List } from "antd"
import styled from "styled-components"
import { colors } from "../../../colors"

const StyledList = styled(List)`
  width: 100%;
  border-radius: 10px;
  background-color: ${colors.white};
`
const data = [
  {
    title: "Raghav Kumar",
  },
  {
    title: "Raghav Kumar",
  },
  {
    title: "Raghav Kumar",
  },
  {
    title: "Raghav Kumar",
  },
  {
    title: "Raghav Kumar",
  },
  {
    title: "Raghav Kumar",
  },
  {
    title: "Raghav Kumar",
  },
  {
    title: "Raghav Kumar",
  },
  {
    title: "Raghav Kumar",
  },
]
const Notifications = () => {
  const position = "bottom"
  const align = "center"
  return (
    <>
      <StyledList
        pagination={{
          position,
          align,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item style={{ padding: 10 }}>
            <List.Item.Meta
              avatar={<Avatar>RK</Avatar>}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Raghav commented on your post- Keep doing the good work mate!! Really looking forward to meeting you - 10min ago"
            />
          </List.Item>
        )}
      />
    </>
  )
}
export default Notifications
