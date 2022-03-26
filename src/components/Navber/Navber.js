import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navber = () => {
    return (
        <div>
            <>
                <Navbar bg="white" variant="white">
                    <Container>
                        <Navbar.Brand href="#home">Gun47 Store</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="#shop" className="text-dark">
                                Shop
                            </Nav.Link>
                            <Nav.Link href="cart" className="text-dark">
                                Cart
                            </Nav.Link>
                            <Nav.Link href="#about" className="text-dark">
                                About Us
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Navber;
