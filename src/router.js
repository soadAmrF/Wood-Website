import { Routes, Route } from "react-router-dom";
import Layouts from "./Layouts";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Downloads from "./Pages/Downloads";
import Service from "./Pages/Services";
import Contact from "./Pages/Contact";
import Jobs from "./Pages/Jobs";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="jobs" element={<Jobs />} />
        
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        
        <Route path="downloads" element={<Downloads />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}