import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Product from './page/Product';
import Course from './page/Course';
import ProductDetail from './page/ProductDetail';
import Tax from './page/Tax';
import Footer from './Layouts/Footer';
import Contact from './page/Contact';
import Teacher from './page/Teacher';

function App() {
  return (
      <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/teacher" element={<Teacher/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id/:qty" element={<ProductDetail/>}/>
          <Route path="/tax/:sal/:p" element={<Tax/>}/>
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
