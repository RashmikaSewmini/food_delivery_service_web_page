import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Common from "./pages/Common";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Help from "./pages/Help";
import Services from "./pages/Services";
import Privacy from "./pages/Privacy";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-layout">
          <Navbar />
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Common />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}


export default App;
