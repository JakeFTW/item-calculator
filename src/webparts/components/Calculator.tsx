import React from "react";
import { ItemRow } from "./ItemRow";

// array of items to be displayed in the list
const items: Item[] = [
  {
    id: 0,
    name: "Item 1",
    price: 200,
    amount: 0,
    total: 0,
  },
  {
    id: 1,
    name: "Item 2",
    price: 150,
    amount: 0,
    total: 0,
  },
];

const todoItems = items.map((items) => <ItemRow key={items.id} item={items} />);

export default function Calculator() {
  return <div>{todoItems}</div>;
}
