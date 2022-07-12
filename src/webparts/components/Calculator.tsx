import React from "react";
import { useState } from "react";
import { ItemRow } from "./ItemRow";

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

export default function Calculator() {
  const [items, setItems] = useState(initialItems);

  const handleAmountDecrease = (index: number, amount: number) => {
    let min: number = 0;
    if (amount <= min) {
      console.log("Already at min: 0");
    } else {
      let newAmount: number = amount - 1;
      handleUpdate(index, newAmount);
    }
  };
  const handleAmountIncrease = (index: number, amount: number) => {
    let max: number = 16;
    if (amount >= max) {
      console.log("Already at max: 16");
    } else {
      let newAmount: number = amount + 1;
      handleUpdate(index, newAmount);
    }
  };

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

  const todoItems = items.map((items: any) => (
    <ItemRow
      key={items.id}
      item={items}
      handleAmountDecrease={() => handleAmountDecrease(items.id, items.amount)}
      handleAmountIncrease={() => handleAmountIncrease(items.id, items.amount)}
    />
  ));

  const groupTotal = items.reduce(
    (total: any, currentValue: any) => (total = total + currentValue.total),
    0
  );

  return (
    <div>
      <div>{todoItems}</div>
      <h1>Total: £{groupTotal}</h1>
    </div>
  );
}
