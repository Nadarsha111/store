import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";

const TopNav = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" style={{height:"12vh"}}>
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Men&apos;Clothing</Nav.Link>
            <Nav.Link href="#features">Women&apos;sClothing</Nav.Link>
            <Nav.Link href="#pricing">Electronics</Nav.Link>
            <Nav.Link href="#pricing">Jewllery</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="me-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
          
        </Container>
      </Navbar>
    </>
  );
};

export default TopNav;
