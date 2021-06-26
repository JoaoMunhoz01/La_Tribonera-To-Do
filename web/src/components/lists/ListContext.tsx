import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import List from "../../List";

interface ContextType {
  lists: List[];
  setLists: (lists: List[]) => void;
  editingList: List | undefined;
  setEditingList: (list: List) => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export const ListContext = createContext<ContextType>({
  lists: [],
  setLists: () => {},
  editingList: undefined,
  setEditingList: () => {},
  showModal: false,
  setShowModal: () => {},
});

export const ListProvider: React.FC = ({ children }) => {
  const [lists, setLists] = useState<List[]>([]);
  const [editingList, setEditingList] = useState<List | undefined>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("/api/listas").then(res => {
      setLists(res.data);
    });
  }, []);

  return (
    <ListContext.Provider
      value={{
        lists,
        setLists,
        editingList,
        setEditingList,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
