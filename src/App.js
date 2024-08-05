
import "./App.css";

import BizTitle from "./Components/BizTitle";
import ServiceCard from "./Components/ServicesProvided";
import Testimonials from "./Components/Testimonials";
import AreasOfService from "./Components/AreasOfService";
import PhotoGallery from "./Components/PhotoGallery";
import Footer from "./Components/Footer";
import DrawerAppBar from "./Components/AppBarWithDrawer";
import ScrollToTopButton from "./Components/ScrollToTopButton";


function App() {
  return (
    <>
    <div className="App">
      <DrawerAppBar/>
      <BizTitle />
      <ServiceCard />
      <AreasOfService />
      <PhotoGallery />
      <Testimonials />
      <Footer />
      <ScrollToTopButton/>
    </div>
   
    </>
  );
}

export default App;
