import Navbar from "./components/Navbar";
import { Hero } from "./components/Navbar";
import Card from "./components/Card";
import InstructionsSection from "./components/InstructionsSection";
import ProductPlan from "./components/ProductPlan";
import {CTA} from './components/Footer';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <InstructionsSection/>
      <ProductPlan/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
