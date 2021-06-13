import { useState } from "react";
import List from "./List";

const nomesListas = [
  "Lista 1",
  "Lista 2",
  "Lista 3",
  "Lista 4"
];

const Lists = () => {
  let [listas, setListas] = useState(nomesListas);

  const removerItem = (index: number) => {
    let novaLista = [...listas];
    novaLista.splice(index, 1);
    setListas(novaLista);
  };

  return (
    <ul>
      {
        listas.map((lista, index) => (
          <List key={index} nome={lista} onRemoverItem={() => {removerItem(index)}}/>
        ))
      };
    </ul>
  );
};

export default Lists;
