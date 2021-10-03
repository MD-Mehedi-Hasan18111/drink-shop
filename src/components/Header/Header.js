import React from 'react';
import './Header.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import NavBar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavBar />
            <div className="banner">
                <Container>
                    <Row>
                        <Col lg={5} md={6} xs={12} className="intro">
                            <div>
                                <h1>Welcome our drinks shop!</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                <Link to="/drinks">
                                    <button className="btn btn-danger">Quick Order <i class="fas fa-cart-plus"></i></button>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={7} md={6} xs={12}></Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default Header;