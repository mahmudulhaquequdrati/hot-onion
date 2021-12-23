import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import useFirebase from "../../../hooks/useFirebase";
import logo from "../../../images/logo2.png";

const NavBar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar className="sticky-top" bg="white" expand="lg">
        <Container>
          <Link to="/" style={{ width: "150px" }}>
            <img src={logo} className="img-fluid mt-2" alt="" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center flex align-middle">
              <Nav.Link
                href="/#home"
                style={{ fontSize: "15px", color: "black" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/#foods"
                style={{ fontSize: "15px", color: "black" }}
              >
                Foods
              </Nav.Link>

              {user?.email ? (
                <Button
                  onClick={logOut}
                  className="bg-danger rounded-pill py-2 px-3 ms-2 border-0"
                  style={{ fontSize: "15px", cursor: "pointer" }}
                >
                  LogOut
                </Button>
              ) : (
                <>
                  <Link to="/sign-in">
                    <Button
                      className="bg-transparent text-dark py-2 px-3 border-0"
                      style={{ fontSize: "15px" }}
                    >
                      sign in
                    </Button>
                  </Link>

                  <Link to="/sign-up">
                    <Button
                      className="bg-danger rounded-pill py-2 px-3 border-0"
                      style={{ fontSize: "15px", cursor: "pointer" }}
                    >
                      sign up
                    </Button>
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
