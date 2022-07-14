import React from "react";
import { useState } from "react";
import { Item } from "./Item";
import TotalBar from "./TotalBar";

// array of items to be displayed in the list
const initialItems: Item[] = [
  {
    id: 0,
    name: "Slider",
    price: 200,
    amount: 0,
    total: 0,
    style: "slider",
  },
  {
    id: 1,
    name: "Button",
    price: 150,
    amount: 0,
    total: 0,
    style: "button",
  },
];

export default function ItemGroup() {
  const [items, setItems] = useState(initialItems);

  const handleUpdate = (index: any, amount: any) => {
    const item: Item = {
      id: items[index].id,
      name: items[index].name,
      price: items[index].price,
      amount: amount,
      total: amount * items[index].price,
      style: items[index].style,
    };
    const newItems = [...items];
    newItems[index] = item;
    setItems(newItems);
  };

  const itemsGroup = items.map((items: any) => (
    <Item key={items.id} item={items} handleUpdate={handleUpdate} />
  ));

  const groupTotal = items.reduce(
    (total: any, currentValue: any) => (total = total + currentValue.total),
    0
  );

  return (
    <>
      <div>{itemsGroup}</div>
      <TotalBar groupTotal={groupTotal} />
    </>
  );
}
