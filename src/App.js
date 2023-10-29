import "./styles.css";
import List from "./List";
import Actions from "./Actions";
import { items } from "./data";
import { useState } from "react";
import { intersection, not } from "./utils";

export default function App() {
  const [leftListItems, setLeftListItems] = useState(items);
  const [rightListItems, setRightListItems] = useState([]);
  const [checkedListitems, setCheckedListItems] = useState([]);

  let leftCheckedItems = intersection(leftListItems, checkedListitems);
  let rightCheckedItems = intersection(rightListItems, checkedListitems);
  const handletoggle = (item) => {
    console.log("Checkbox clicked", item);
    const newCheckedListItems = [...checkedListitems];
    const currentIndex = newCheckedListItems.indexOf(item);
    if (currentIndex === -1) {
      newCheckedListItems.push(item);
    } else {
      newCheckedListItems.splice(currentIndex, 1);
    }
    setCheckedListItems(newCheckedListItems);
  };

  console.log("Checked item list", checkedListitems);

  const moveRight = () => {
    console.log("move Right");
    setRightListItems(rightListItems.concat(leftCheckedItems));
    setLeftListItems(not(leftListItems, leftCheckedItems));
    setCheckedListItems(not(checkedListitems, leftCheckedItems));
  };

  const moveLeft = () => {
    console.log("move Left");
    setLeftListItems(leftListItems.concat(rightCheckedItems));
    setRightListItems(not(rightListItems, rightCheckedItems));
    setCheckedListItems(not(checkedListitems, rightCheckedItems));
  };

  return (
    <div className="Flex">
      <List items={leftListItems} handletoggle={handletoggle} />
      <Actions moveRight={moveRight} moveLeft={moveLeft} />
      <List items={rightListItems} handletoggle={handletoggle} />
    </div>
  );
}
