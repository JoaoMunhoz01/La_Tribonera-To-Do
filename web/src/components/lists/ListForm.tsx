import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { ListContext } from "./ListContext";

const ListForm = () => {
  const [listInput, setListInput] = useState("");
  const { setLists } = useContext(ListContext);

  const reloadLists = () => {
    axios.get('/api/listas').then(res => {
      setLists(res.data);
    });
  };

  const sendForm = (e: React.FormEvent) => {
    e.preventDefault();

    const name = listInput;
    axios.post("/api/listas/criar", { name }).then(() => reloadLists());
    setListInput("");
  };

  return (
    <form onSubmit={sendForm} className="list-form">
      <input
        type="text"
        placeholder="Nova lista"
        onChange={e => setListInput(e.target.value)}
        value={listInput}
      />
    </form>
  );
};

export default ListForm;
