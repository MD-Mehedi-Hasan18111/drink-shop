import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const SingleDrink = (props) => {

    const { idDrink, strDrink, strDrinkThumb } = props.drink;

    const history = useHistory();

    const handleDetail = () => {
        history.push(`/details/${idDrink}`);
    }

    return (
        <Col>
            <Card className="h-100" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strDrinkThumb} />
                <Card.Body>
                    <Card.Title>{strDrink}</Card.Title>
                    <button onClick={() => props.addToDrinks(props.drink)} className="btn btn-success me-4">Add to Cart</button>
                    <button onClick={handleDetail} className="btn btn-danger">Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleDrink;