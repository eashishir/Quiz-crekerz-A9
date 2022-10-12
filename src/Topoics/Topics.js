import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topic = useLoaderData();

    const allTopic = topic.data.questions;

    return (
        <div>
            {
                allTopic.map(topic => <Topic
                    key={topic.id}
                    topic={topic}

                ></Topic>)
            }

        </div>
    );
};

export default Topics;