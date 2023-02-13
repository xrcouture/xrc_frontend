import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
