import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter";
import Navbar from "./components/Header/Navbar";

function Layouts({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Layouts;
