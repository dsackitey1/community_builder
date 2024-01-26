import { useState } from "react";
import "./App.css";
import Sphere from "./Sphere";

function App() {
  const [listItems, setListItems] = useState([
    {
      listItem: "",
    },
  ]);

  const [randomizedList, setRandomizedList] = useState("");

  const addListItem = () => {
    setListItems([...listItems, { listItem: "" }]);
  };

  const removeListItem = (index) => {
    const existingData = [...listItems];
    const filteredData = existingData.filter((x, i) => i !== index);
    setListItems(filteredData);
  };

  const handleListItemChange = (index, e) => {
    const newListItems = [...listItems];
    newListItems[index][e.target.name] = e.target.value;
    setListItems(newListItems);
  };

  const randomizeListItems = () => {
    const shuffledList = [...listItems]
      .map((item) => item.listItem)
      .sort(() => Math.random() - 0.5);
    setRandomizedList(shuffledList.join(", "));
  };

  return (
    <>
      <Sphere />
    </>
  );
}

export default App;
