import './App.css';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './css/style.css';
import DataApp from './DataContext';

import Header from './components/shared/Header';

import Footer_Light from './components/shared/Footer_Light';
import Home from './components/Home';


import About from './components/About';
import Courses from './components/Courses';
import Admission from './components/Admission';
import Contact from './components/Contact';
import Experts from './components/Experts';
import ExpertDetail from './components/ExpertDetail';
import FAQ from './components/FAQ';

import Dashboard from './components/Dashboard';
import ExpertsAdmin from './components/secure/ExpertsAdmin';
import UsersAdmin from './components/secure/UsersAdmin';
import Login from './components/Login';
import Register from './components/Register';
import ProfilePage from './components/ProfilePage';


function App() {
 
  return (
    <>
      <BrowserRouter>
        <DataApp>
          <Header />
         
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/admission' element={<Admission />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/experts' element={<Experts />} />
            <Route path='/expertdetail' element={<ExpertDetail />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/dashboard_experts' element={<ExpertsAdmin />} />
            <Route path='/dashboard_users' element={<UsersAdmin />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* <Route path='/cart' element={<Home />} />
            <Route path='/checkout' element={<Home />} />
            <Route path='/ordersuccess' element={<Home />} />
            <Route path='/category/:categoryid' element={<Category />} />
            <Route path='/subcategory/:subcategoryid' element={<Home />} />
            <Route path='/product/:productid' element={<Product />} /> */}
            <Route path='/' element={<Home />} />
          </Routes>
          {/* <Home /> */}
          <Footer_Light />
        </DataApp>

      </BrowserRouter>
    </>
  );
}

export default App;
