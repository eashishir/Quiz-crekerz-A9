import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Option = ({ option }) => {
    const rightHandaler = (option) => {

        // console.log(option);

    }
    return (
        <div>

            <ListGroup as="ol">

                <ListGroup.Item as="li"><input onClick={() => rightHandaler(option)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input> {option} </ListGroup.Item>

            </ListGroup>

            {/* <div class="form-check">

                <label className="form-check-label" for="flexRadioDefault1">
                    <input onClick={() => rightHandaler(option)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input> {option}
                </label>
            </div> */}

        </div>
    );
};

export default Option;