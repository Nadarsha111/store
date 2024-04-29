import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function TopNav() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="body-tertiary"
      variant="light"
      className="shadow "
      style={{
        height: "12vh",
      }}
    >
      <Container>
        <Navbar.Brand href="#" className="ml-1">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Men&apos;Clothing</Nav.Link>
            <Nav.Link href="#">Womes&apos;Clothing</Nav.Link>
            <Nav.Link href="#">Jewellery</Nav.Link>
            <Nav.Link href="#">Electronics</Nav.Link>
          </Nav>
          <div className="search-and-icons d-flex align-items-center">
            <Form className="d-flex mb-2 me-2">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary">Search</Button>
            </Form>
            <div className="user-icons d-flex mb-2">
              <div className="profile">
                <i className="bi bi-person"></i>
              </div>
              <div className="wishlist">
                <i className="bi bi-heart"></i>
              </div>
              <div className="cart">
                <i className="bi bi-cart3"></i>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
