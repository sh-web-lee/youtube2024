import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Resgiter from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";



function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <Single />
      },
      {
        path: 'write',
        element: <Write />
      }
    ]
  },
  {
    path: "/register",
    element: <Resgiter />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);




function App() {
  return (
  <div className="flex justify-center">
    <div className="w-[1024px]">
      <RouterProvider router={router} />
    </div>
  </div>);
}

export default App;
