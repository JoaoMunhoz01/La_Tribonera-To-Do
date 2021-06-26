import { ListProvider } from "../components/lists/ListContext";
import ListForm from "../components/lists/ListForm";
import Lists from "../components/lists/Lists";
import Navbar from "../components/Navbar";

const ListsPage = () => {
  return (
    <div>
      <Navbar />

      <div className="container-vertical align-center">
        <h1 className="title">Listas</h1>
        <ListProvider>
          <ListForm />
          <Lists />
        </ListProvider>
      </div>
    </div>
  );
};

export default ListsPage;
