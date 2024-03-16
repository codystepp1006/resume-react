import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/projects.jsx'
import Resume from './pages/Resume.jsx';
import Contactme from './pages/Contactme.jsx';

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
      },
      { 
        path: '/',
        element: <Home /> 
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
);
