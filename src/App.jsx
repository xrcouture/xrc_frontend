import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Brand from './Components/brands/Brand';
import Contact from './Components/contact/Contact';


function App() {

  return (
    <div>
      <Header />
      <Section1 />
      <Brand />
      <Section2 />
      <Brand />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
