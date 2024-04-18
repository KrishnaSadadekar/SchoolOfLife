
import './App.css';

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Trainers from './components/Trainers';
import Footer from './components/Footer';
import Contact from './components/Contact';
import AllCourses from './components/AllCourses';
import CourseDetails from './components/CourseDetails';
import AddCourse from './components/admin/AddCourse';
import { ToastContainer } from 'react-toastify';
import Order from './components/Order';

import 'react-toastify/dist/ReactToastify.css';
import { SweetAlert } from './components/SweetAlert';
import HeaderD from './components/Header';
import AddTrainer from './components/admin/AddTrainer';
import AllProducts from './components/admin/AllProducts';
import UpdateProduct from './components/admin/UpdateProduct';
import Navbar from './components/Navbar';
import AddCategory from './components/admin/AddCategory';
import Login from './components/admin/Login';
import { isLogin } from './components/auth/auth';
import { useState, useEffect } from 'react';

import dashboard from './components/Dashboard';
import { Link } from 'react-router-dom';
import AdminD from './components/admin/AdminD';
// ... (other imports)

function App() {
  useEffect(() => {

    setAuthenticated(isLogin());
  }, []);

  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <Router>

          <Navbar />
          <Routes>

            <Route path='/addcourse' element={<AddCourse />} />
            <Route path='/addtrainer' element={<AddTrainer />} />
            <Route path="/allProducts" element={<AllProducts />} />
            <Route path='/admin/update/:id' element={<UpdateProduct />} />
            <Route path='/addcategory' element={<AddCategory />} />
            
            <Route path='/adminD' element={<AdminD/>} />

          </Routes>

          <ToastContainer />

        </Router>) : (
        <Router>

          <HeaderD />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/trainer' element={<Trainers />} />
            <Route path='/contactus' element={<Contact />} />
            <Route path='/allCourses' element={<AllCourses />} />
            <Route path='/course/:id' element={<CourseDetails />} />
            <Route path='/order/:id' element={<Order />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<dashboard />} />
            
          </Routes>
          
          <ToastContainer />
          <Footer />
        </Router>
      )
      }

      
    </div>
  );
}

export default App;
