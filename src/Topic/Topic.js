import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Option from '../Option/Option';







const Topic = ({ topic }) => {

    const { question, options, correctAnswer } = topic;
    // console.log(options);


    return (






        <div className=' p-5 bg-info m-5'>
            {/* <div>Quiz of {name}</div> */}
            <h2>{question.slice(3, -4)}</h2>
            <button className='d-flex m-2 bg-danger'>
                <FontAwesomeIcon icon={faEyeSlash} ></FontAwesomeIcon>
            </button>
            <div>
                {
                    options.map(option => <Option
                        option={option}


                    >

                    </Option>)
                }


            </div>
        </div>
    );
};

export default Topic;
