import React from "react";
import Button from "@mui/material/Button";

interface Props {
  item: Item;
  handleAmountDecrease: any;
  handleAmountIncrease: any;
}

export const ItemRow: React.FC<Props> = ({
  item,
  handleAmountDecrease,
  handleAmountIncrease,
}) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>
        Price: £{item.price} <br /> Amount: {item.amount}
      </p>
      <Button onClick={handleAmountDecrease}>-</Button>
      <Button onClick={handleAmountIncrease}>+</Button>
      <p>Total: £{item.total}</p>
    </div>
  );
};
