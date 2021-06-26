import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import List from "../../List";

interface ContextType {
  lists: List[];
  setLists: (lists: List[]) => void;
}

export const ListContext = createContext<ContextType>({
  lists: [],
  setLists: () => {},
});

export const ListProvider: React.FC = ({ children }) => {
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    axios.get("/api/lists").then(res => {
      setLists(res.data);
    });
  }, []);

  return (
    <ListContext.Provider value={{lists, setLists}}>
      {children}
    </ListContext.Provider>
  );
};
