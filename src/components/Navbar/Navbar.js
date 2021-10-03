import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';

const NavBar = () => {

    const [cart, setCart] = useContext(cartContext);

    const menuStyle = {
        textDecoration: "none",
        color: "#000",
        fontWeight: "500",
        fontSize: "18px",
        marginRight: "15px"
    }

    return (
        <div>
            <div className="nav-area">
                <Navbar className="banner-nav">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Link style={menuStyle} to="/home">Home</Link>
                            <Link style={menuStyle} to="/drinks">Drinks</Link>
                            <Link style={menuStyle} to="/inventory">Inventory</Link>
                            <Link style={menuStyle} to="/review"><i class="fas fa-shopping-cart"></i> {cart.length}</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;