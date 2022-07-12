import React from "react";
import { ItemRow } from "./ItemRow";

// array of items to be displayed in the list
const items: Item[] = [
  {
    id: 0,
    name: "Item 1",
    price: 200,
  },
  {
    id: 1,
    name: "Item 2",
    price: 150,
  },
];

export default function Calculator() {
  return (
    <div>
      <ItemRow item={items[0]} />
      <ItemRow item={items[1]} />
    </div>
  );
}
