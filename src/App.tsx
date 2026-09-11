import { Suspense } from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"
import type { Technology } from "./Types/type";

const fetchTechnologies = async (): Promise<Technology[]> => {
  const response = await fetch("/data/technologies.json");
  const data = await response.json();

  return data;
};

const technologiesPromise = fetchTechnologies();


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Suspense fallback ={<h2>Loading...</h2>}>
          <Technologies promise ={ technologiesPromise} />
    </Suspense>
    </>
  )
}

export default App
