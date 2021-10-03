import React from 'react';
import { Link } from 'react-router-dom';

const OrderComplete = () => {
    return (
        <div className="text-center" style={{ marginTop: "200px", padding: "15px", backgroundColor: "#000", border: "1px solid blue" }}>
            <h2 className="text-light fs-1">Order Has Been Successful!</h2>
            <Link to='/home'>
                <button className="btn btn-danger">Back To Home</button>
            </Link>
        </div>
    );
};

export default OrderComplete;