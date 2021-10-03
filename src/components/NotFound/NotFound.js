import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {

    const history = useHistory();

    const handleBack = () => {
        history.push('/home');
    }

    return (
        <div className="text-center">
            <h2>Page not Found!</h2>
            <h1>404!</h1>
            <button onClick={handleBack} className="btn btn-primary">Back to Home</button>
        </div>
    );
};

export default NotFound;