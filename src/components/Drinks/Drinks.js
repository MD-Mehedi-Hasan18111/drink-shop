import Button from '@restart/ui/esm/Button';
import React, { useContext, useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { cartContext } from '../../App';
import NavBar from '../Navbar/Navbar';
import SingleDrink from '../SingleDrink/SingleDrink';

const Drinks = () => {

    const [drinks, setDrinks] = useState([]);
    const [searchText, setSearchText] = useState('');

    const [cart, setCart] = useContext(cartContext);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setDrinks(data?.drinks))
    }, [searchText])

    const searchHandler = (event) => {
        setSearchText(event.target.value);
    }

    const addToDrinks = (drink) => {
        // console.log(drink);
        const existDrink = cart.find(dr => dr.idDrink === drink.idDrink);
        let newCart = [];

        if (existDrink) {
            const remainingCart = cart.filter(dr => dr.idDrink !== drink.idDrink);
            existDrink.quantity += 1;
            newCart = [...remainingCart, existDrink];
        }
        else {
            drink.quantity = 1;
            newCart = [...cart, drink];
        }
        setCart(newCart);
    }

    // console.log(drinks);

    return (
        <div>
            <InputGroup className="mb-3 w-50 mx-auto my-4">
                <FormControl
                    onChange={searchHandler}
                    placeholder="Search..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <button className="btn btn-info">
                    Search
                </button>
            </InputGroup>
            <Container className="my-4">
                <Row className="g-4 ps-5">
                    {
                        drinks?.map(drink => <SingleDrink addToDrinks={addToDrinks} drink={drink}></SingleDrink>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Drinks;