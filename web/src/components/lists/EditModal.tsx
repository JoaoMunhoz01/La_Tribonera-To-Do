import axios from "axios";
import React, { useContext } from "react";
import Modal from "../Modal";
import WhiteButton from "../WhiteButton";
import { ListContext } from "./ListContext";

const EditModal = () => {
  const {
    showModal,
    setShowModal,
    editingList,
    setEditingList,
    lists,
    setLists,
  } = useContext(ListContext);

  const updateListName = () => {
    let newLists = lists.map(list => {
      return list.id === editingList!.id ? editingList : list;
    });

    setLists(newLists as any);
  };

  const sendData = (e: React.FormEvent) => {
    e.preventDefault();
    axios.put("/api/listas", { ...editingList });
    setShowModal(false);
    updateListName();
  };

  return (
    <Modal show={showModal} setShow={setShowModal}>
      <form onSubmit={sendData}>
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={editingList ? editingList.name : ""}
            onChange={e => {
              if (editingList) {
                let newList = { ...editingList };
                newList.name = e.target.value;
                setEditingList(newList);
              }
            }}
          />
        </div>

        <WhiteButton>Salvar</WhiteButton>
      </form>
    </Modal>
  );
};

export default EditModal;
