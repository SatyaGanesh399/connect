import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Avatar } from "antd"
import { colors } from "../../../colors"
import styled from "styled-components"

const NavBar = styled(Navbar)`
  opacity: 0.95;
  padding-right: 30px;
  padding-left: 30px;
  background: ${colors.primary};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.1px);
  -webkit-backdrop-filter: blur(11.1px);
  border: 1px solid rgba(133, 32, 32, 0.17);
  a {
    color: ${colors.white};
  }
`
const Title = styled(Navbar.Brand)`
  font-weight: 600;
`

function index() {
  return (
    <NavBar expand="lg" sticky="top">
      <Container fluid>
        <Title href="#">CONNECT</Title>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">My Account</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Avatar
              className="pointer"
              style={{
                backgroundColor: colors.secondary,
                verticalAlign: "middle",
              }}
              size="large"
              gap="20"
            >
              U
            </Avatar>
          </Form>
        </Navbar.Collapse>
      </Container>
    </NavBar>
  )
}

export default index
