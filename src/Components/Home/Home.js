import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';
import Card from 'react-bootstrap/Card';
import img from "../quiz-leuchtreklame_1262-19629.webp"

const Home = () => {
    const quizs = useLoaderData();
    const allQuizs = quizs.data;

    return (


        <div className='bg-dark'>
            <div className=''>
                <Card className="bg-dark text-white">
                    <Card.Img src={img} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='text-info'>Start myQuiz</Card.Title>
                        <Card.Text className='font-weight-bolder'>
                            Welcome to the world’s largest quiz community. Play a quiz or create your own. Join a virtual or live event. There's a Sporcle for everyone!
                        </Card.Text>

                    </Card.ImgOverlay>
                </Card>
            </div>

            <div className='d-lg-flex d-md-flex'>
                {
                    allQuizs.map(quiz => <Quizs
                        key={quiz.id}
                        quiz={quiz}

                    ></Quizs>)
                }
            </div>

        </div>
    );
};

export default Home;