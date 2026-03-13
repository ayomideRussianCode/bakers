import Navbar from "./components/Navbar";
import { Hero } from "./components/Navbar";
import Card from "./components/Card";
import InstructionsSection from "./components/InstructionsSection";
import ProductPlan from "./components/ProductPlan";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <InstructionsSection/>
      <ProductPlan/>
    </>
  );
}

export default App;
