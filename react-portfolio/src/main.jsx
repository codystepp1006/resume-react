import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import React from 'react'
// import App from './App.jsx'
import './index.css'
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/projects.jsx'
import Resume from './pages/Resume.jsx';
import Contactme from './pages/Contactme.jsx';



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const router = createBrowserRouter ([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path: '/home',
        element:<Home/>
      },
      {
        path: '/projects',
        element:<Projects/>
      },
      {
        path: '/resume',
        element:<Resume/>
      },
      {
        path: '/contactme',
        element:<Contactme/>
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
);
