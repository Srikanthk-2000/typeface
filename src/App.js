import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ImageStudio from './components/landingPage/ImageStudio';
import LandingCard from './components/landingPage/landingcard';
import PlatForm from './components/landingPage/PlatForm';
import CompanyPage from './components/landingPage/CompanyPage';
import Blog from './components/landingPage/blog'
import LoginForm from './components/form/Login';
import RegisterForm from './components/form/Register';
import Demopage from './components/landingPage/Demopage';
import AddToCart from './components/landingPage/AddToCart';


const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<LandingCard />} />
          <Route path="/imageStudio" element={<ImageStudio />} />
          <Route path="/platform" element={<PlatForm />} />
          <Route path="/companypage" element={<CompanyPage/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="/demo" element={<Demopage/>} />
          <Route path="/addtocart" element={<AddToCart/>} />
         


        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
