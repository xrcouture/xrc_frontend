import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import { useEffect } from 'react';
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
  const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
      var children = entry.target.children
      if(entry.isIntersecting){
        // entry.target.classList.add("animate__animated", "animate__fadeInUp")
      for(let i =0; i<children.length;i++){
          children[i].classList.add(`f-${i}`)
      }
      }else{
        console.log("leaved")
        // entry.target.classList.remove("animate__fadeInUp")
      }
    })
  })
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((el)=> observer.observe(el))
  },[]);

  

  return (
    <RouterProvider router={router} />
  )
}

export default App
