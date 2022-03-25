import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navber = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Gun47 Store</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="#shop" className="text-white">
                                Shop
                            </Nav.Link>
                            <Nav.Link href="#about" className="text-white">
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
