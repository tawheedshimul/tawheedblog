import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/Errorpage/Errorpage";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Single from "../../Pages/Single/Single";
import Write from "../../Pages/Write/Write";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";



export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/post/:id',
        element: <Single/>
      },
      {
        path: '/write',
        element: <Write/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
    ]
  }
])