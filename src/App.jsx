import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Layout wrapper to handle Footer visibility
const Layout = ({ children }) => {
  const location = useLocation();
  const showFooter = location.pathname !== '/';

  return (
    <>
      <Navbar />
      
      {/* 👇 ADD THIS BLOCK HERE. It creates the premium glow for all pages. */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -50, // Puts it behind everything
         background: `
  radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.03), transparent 50%),
  linear-gradient(0deg, #000000 0%, #010f10 100%)
`

        }} 
      />
      {/* 👆 END OF BACKGROUND BLOCK */}

      {children}
      {showFooter && <Footer />}
    </>
  );
};
function App() {
  return (
    
  <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
  