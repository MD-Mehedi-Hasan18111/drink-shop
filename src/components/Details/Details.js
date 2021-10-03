import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {

    const { id } = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setDetail(data.drinks[0]))
    }, [])

    // console.log(detail);

    const { strDrink, strDrinkThumb, strCategory, strInstructions } = detail;

    return (
        <div>
            <Container className="shadow-lg rounded-3 mt-5 p-5">
                <Row className="d-flex align-items-center">
                    <Col lg={8} md={6} xs={12}>
                        <h2>{strDrink}</h2>
                        <p>Category: {strCategory}</p>
                        <p>{strInstructions}</p>
                        <Link to="/drinks">
                            <button className="btn btn-lg btn-danger">Back</button>
                        </Link>
                    </Col>
                    <Col lg={4} md={6} xs={12}>
                        <img className="border rounded-circle" height="350px" src={strDrinkThumb} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Details;