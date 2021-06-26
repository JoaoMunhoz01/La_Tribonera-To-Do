import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Lists from "../components/lists/Lists";
import Navbar from "../components/Navbar";
import List from "../List";

const ListsPage = () => {
  const [lists, setLists] = useState<List[]>([]);
  const [listInput, setListInput] = useState("");

  const loadLists = () => {
    axios.get("/api/lists").then(res => {
      setLists(res.data);
    });
  };

  const sendForm = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("/api/list/create", { name: listInput });
    setListInput("");
    loadLists();
  };

  const removeList = (id: string) => {
    axios.delete("/api/lists/" + id).then(_ => {
      loadLists();
    });
  };

  useEffect(loadLists, []);

  return (
    <div>
      <Navbar />

      <div className="container-vertical align-center">
        <h1 className="title">Listas</h1>
        <form onSubmit={sendForm} className="list-form">
          <input
            type="text"
            placeholder="Nova lista"
            onChange={e => setListInput(e.target.value)}
            value={listInput}
          />
        </form>
        <Lists lists={lists} onRemoveList={removeList} />
      </div>
    </div>
  );
};

export default ListsPage;
