import { Button, Card, Col, Divider, Row, Space, Typography } from "antd"
import React from "react"
import styled from "styled-components"

const StyledDivider = styled(Divider)`
  margin: 5px;
`

function index() {
  return (
    <Space size="small" style={{ marginBottom: 30 }}>
      <Row gutter={10}>
        <Col span={8}>
          <Card title="Privacy & Personalization">
            <p style={{ padding: 15, textAlign: "left" }}>
              Change your account privacy settings and apperance for your
              likings. Advance customization and dark mode is also available now
            </p>
            <StyledDivider />
            <Button type="link">Privacy Settings</Button>
            <StyledDivider />
            <Button type="link">Profile and Personalization</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Security Settings">
            <p style={{ padding: 15, textAlign: "left" }}>
              Protect your account from hackers. We offer two-factor
              authentication for your account to protect your privacy. Security
              settings include your password change and reset options also
            </p>
            <StyledDivider />
            <Button type="link">Security Settings</Button>
            <StyledDivider />
            <Button type="link">Reset your password</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="People and Sharing">
            <p style={{ padding: 15, textAlign: "left" }}>
              you can now change who can see comment and share your posts and
              also control who can view your profile. This enables an additional
              security and privacy options for your account
            </p>
            <StyledDivider />
            <Button type="link">Manage who can view your profile</Button>
            <StyledDivider />
            <Button type="link">
              Change settings who can view / share your posts
            </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Raise a Complaint">
            <p style={{ padding: 15, textAlign: "left" }}>
              If you are facing any issue, came across any other person misusing
              the platform or attempting any illegal tasks or offers to sell
              illegal items/stuff kindly raise a complaint here.
            </p>
            <StyledDivider />
            <Button type="link">Raise a Complaint</Button>
            <StyledDivider />
            <Button type="link">Contact the authority</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Report a Bug">
            <p style={{ padding: 15, textAlign: "left" }}>
              Bugs and Glitches ruins the user experience and we are striving to
              provide our user hasstle free user experience. Even still if you
              experience any bugs either on the UI part or the functionality
              part. kindly report the bug here. your report saves the user
              experienceof others too.
            </p>
            <StyledDivider />
            <Button type="link">Bug Report</Button>
          </Card>
        </Col>{" "}
        <Col span={8}>
          <Card title="Suggest us">
            <p style={{ padding: 15, textAlign: "left" }}>
              We as an organisation prioritizes the users comfort and experience
              through our services. And if you have suggestions which improves
              user experience. kindly share your sugestions here. Also since we
              are an open source platform contributions are also appreciated
            </p>
            <StyledDivider />
            <Button type="link">New Suggestions</Button>
          </Card>
        </Col>
      </Row>
    </Space>
  )
}

export default index
