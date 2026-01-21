import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

export default function Layouts() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
