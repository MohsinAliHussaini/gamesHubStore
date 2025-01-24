import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import AddToCartComp from "../AddToCartComp/AddToCartComp";
import { useState } from "react";
const Header = () => {
  /* State */
  const [showAddToCart, setShowAddToCart] = useState(false);

  /* End State */

  const showCart = () => {
    setShowAddToCart(!showAddToCart);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="navBody">
        <Navbar.Brand href="#" className="ml-4">
          Navbar scroll
        </Navbar.Brand>
        <div className="upperForm mt-3">
          <Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchBox"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 ml-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="nav-text">
                Home
              </Nav.Link>
              <Nav.Link href="/products/new-arrivals" className="nav-text">
                Shop
              </Nav.Link>
              <Nav.Link href="#" className="nav-text">
                Contact Us
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="mt-1"
                  color="#7C0A02"
                  size="xl"
                  onClick={showCart}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <AddToCartComp showAddToCart={showAddToCart} close={showCart} />
      </Container>
    </Navbar>
  );
};

export default Header;
