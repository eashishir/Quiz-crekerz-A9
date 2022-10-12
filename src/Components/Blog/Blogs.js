import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="question-part">
            <h2>Question Bank</h2>
            <div className='question-container'>
                <div className='que-1'>
                    <h1>Purpose of react router?</h1>
                    <p>React Router is a standard library for routing in React.It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className='que-2'>
                    <h1>Who dose context api work?</h1>
                    <p>React.createContext() is all you need.It returns a consumer and a provider.Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>

                </div>

                <div className='que-3'>
                    <h1>useRef what is it?</h1>
                    <p>The useRef Hook allows you to persist values between renders.

                        It can be used to store a mutable value that does not cause a re-render when updated.

                        It can be used to access a DOM element directly.

                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;