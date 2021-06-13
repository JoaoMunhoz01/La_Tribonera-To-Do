import Lists from "../components/lists/Lists";
import Navbar from "../components/Navbar";
import WhiteButton from "../components/WhiteButton";

const ListsPage = () => {
  return (
    <div>
      <Navbar />

      <div className="container-vertical align-center">
        <h1 className="title">Listas</h1>
        <WhiteButton>Criar Lista</WhiteButton>
        <Lists />
      </div>
    </div>
  );
};

export default ListsPage;
