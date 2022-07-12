import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

interface Props {
  item: Item;
}

export const ItemRow: React.FC<Props> = ({ item }) => {
  const [amount, setAmount] = useState(0);

  const handleAmountDecrease = () => {
    let min = 0;
    if (amount <= min) {
      setAmount(min);
    } else {
      setAmount(amount - 1);
    }
  };

  const handleAmountIncrease = () => {
    let max = 16;
    if (amount >= max) {
      setAmount(max);
    } else {
      setAmount(amount + 1);
    }
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <p>
        Price: £{item.price} <br /> Amount: {amount}
      </p>
      <Button onClick={() => handleAmountDecrease()}>-</Button>
      <Button onClick={() => handleAmountIncrease()}>+</Button>
      <p>Total: £{item.price * amount}</p>
    </div>
  );
};
