import { useState } from "react";
import Navbar from "@/scenes/navbar";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<string>("home");

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
