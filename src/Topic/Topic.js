import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Option from '../Option/Option';
import Swal from 'sweetalert2'








const Topic = ({ topic }) => {

    const { question, options, correctAnswer } = topic;
    // console.log(options);

    const rightHandler = (option) => {

        // console.log(option);

        if (option === correctAnswer) {

            Swal.fire('Right answer')
        }
        else {

            Swal.fire('Wrong answer')
        }


    }

    const RightAnswerHandel = () => {

        Swal.fire(
            '',
            `Correct Ans: ${correctAnswer}`,
            'success'
        )
    }

    return (






        <div className=' p-5 bg-info m-5'>
            {/* <div>Quiz of {name}</div> */}
            <h2>{question.slice(3, -4)}</h2>
            <button onClick={() => RightAnswerHandel(correctAnswer)} className='d-flex m-2 bg-danger'>
                <FontAwesomeIcon icon={faEyeSlash} ></FontAwesomeIcon>
            </button>
            <div>
                {
                    options.map((option, index) => <Option
                        option={option}
                        key={index}
                        rightHandler={rightHandler}



                    >

                    </Option>)
                }


            </div>
        </div>
    );
};

export default Topic;
