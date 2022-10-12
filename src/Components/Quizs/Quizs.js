import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Quizs = ({ quiz }) => {
    const { id, logo, name } = quiz;
    return (






        <Card className="bg-info text-light m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title className='text-dark'>{name}</Card.Title>

                <Button variant="danger"> <Link to={`/topic/${id}`} className='  text-dark text-decoration-none'>Start Practice</Link></Button>
            </Card.Body>
        </Card>
    );
};

export default Quizs;