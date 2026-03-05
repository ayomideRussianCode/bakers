import Navbar from "./components/Navbar";
import { Hero } from "./components/Navbar";
import Card from "./components/Card";
import InstructionsSection from "./components/InstructionsSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <InstructionsSection/>
    </>
  );
}

export default App;
