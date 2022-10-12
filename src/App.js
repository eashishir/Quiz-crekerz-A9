
import { Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blog/Blogs';
import Home from './Components/Home/Home';
import Main from './layouts/Main';
import PageError from './PageError/PageError';
import Statistic from './Statistic/Statistic';
import Topics from './Topoics/Topics';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>
        },
        {
          path: '/statistic',
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistic></Statistic>
        },


        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },

      ]

    },
    {
      path: '/topic/:topicId',
      loader: async ({ params }) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)


      },
      element: <Topics></Topics>
    },
    { path: '*', element: <PageError></PageError> },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
