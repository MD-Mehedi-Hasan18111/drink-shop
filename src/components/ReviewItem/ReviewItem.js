import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ReviewItem = (props) => {

    const { strDrink, strDrinkThumb, strInstructions, quantity } = props.drink;

    return (
        <div>
            <Container className="my-3 border shadow-lg p-4">
                <Row className="d-flex align-items-center">
                    <Col lg={6} md={6} xs={12}>
                        <img height="200px" src={strDrinkThumb} alt="" />
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <h3>{strDrink}</h3>
                        <h4>Quantity: {quantity}</h4>
                        <p>{strInstructions}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ReviewItem;