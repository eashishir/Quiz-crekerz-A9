import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Option = ({ option, rightHandler }) => {

    return (
        <div>

            <ListGroup as="ol">

                <ListGroup.Item as="li"><input onClick={() => rightHandler(option)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input> {option} </ListGroup.Item>

            </ListGroup>

        </div>
    );
};

export default Option;