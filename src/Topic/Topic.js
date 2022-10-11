import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


const Topic = ({ topic }) => {

    const { question, options } = topic;
    return (
        <div className=' p-5 bg-info m-5'>
            {/* <div>Quiz of {name}</div> */}
            <h2>{question.slice(3, -4)}</h2>
            <div>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item as="li">{options[0]}</ListGroup.Item>
                    <ListGroup.Item as="li">{options[1]}</ListGroup.Item>
                    <ListGroup.Item as="li">{options[2]}</ListGroup.Item>
                    <ListGroup.Item as="li">{options[3]}</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default Topic;