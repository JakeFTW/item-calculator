import React from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";

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
  // style based on item style
  let style: string = "";
  if (item.style === "slider") {
    style = "slider";
  }
  if (item.style === "button") {
    style = "button";
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>
        Price: £{item.price} <br /> Amount: {item.amount}
      </p>
      {style === "button" ? (
        <div>
          <Button onClick={handleAmountDecrease}>-</Button>
          <Button onClick={handleAmountIncrease}>+</Button>
        </div>
      ) : null}
      {style === "slider" ? (
        <div>
          <Slider
            aria-label="Item amount"
            defaultValue={0}
            step={1}
            max={16}
            valueLabelDisplay="on"
            marks
          />
        </div>
      ) : null}
      <p>Total: £{item.total}</p>
    </div>
  );
};
