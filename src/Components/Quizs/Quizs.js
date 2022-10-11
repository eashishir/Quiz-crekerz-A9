import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Quizs = ({ quiz }) => {
    const { logo, name } = quiz;
    return (
        <Card className="bg-dark text-light m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Button variant="info">Start Practice</Button>
            </Card.Body>
        </Card>
    );
};

export default Quizs;