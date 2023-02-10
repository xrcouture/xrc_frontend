import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Brand from './Components/brands/Brand';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
