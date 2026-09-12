import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import type { Technology } from "./Types/type";

const fetchTechnologies = async (): Promise<Technology[]> => {
  const response = await fetch("/data/technologies.json");
  const data = await response.json();

  return data;
};

const technologiesPromise = fetchTechnologies();

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((prevStack) => [...prevStack, technology]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (id: string) => {
    const removedTechnology = stack.find((item) => item.id === id);

    setStack((prevStack) =>
      prevStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <Hero />

      <Technologies
        promise={technologiesPromise}
        stack={stack}
        onAdd={handleAddToStack}
        onRemove={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;