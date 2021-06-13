import { useState } from "react";
import HomeGreeting from "../components/home/HomeGreeting";
import HomeSidebar from "../components/home/HomeSidebar";
import Navbar from "../components/Navbar";

const HomePage = () => {
  let [nome, setNome] = useState("Nome");

  return (
    <div>
      <Navbar />

      <div className="container">
        <main>
          <HomeGreeting nome={nome}/>
        </main>

        <HomeSidebar />
      </div>
    </div>
  );
};

export default HomePage;
