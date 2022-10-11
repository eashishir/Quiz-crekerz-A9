import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';

const Home = () => {
    const quizs = useLoaderData();
    const allQuizs = quizs.data;
    // console.log(allQuizs);
    return (
        <div className='d-lg-flex'>
            {
                allQuizs.map(quiz => <Quizs
                    key={quiz.id}
                    quiz={quiz}

                ></Quizs>)
            }

        </div>
    );
};

export default Home;