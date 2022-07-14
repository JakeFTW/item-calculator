import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";

interface Props {
  item: Item;
  handleAmountDecrease: any;
  handleAmountIncrease: any;
  handleUpdate: any;
}

export const ItemRow: React.FC<Props> = ({
  item,
  handleAmountDecrease,
  handleAmountIncrease,
  handleUpdate,
}) => {
  // slider state
  const [sliderValue, setSliderValue] = React.useState<number | Array<number>>(
    0
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue);
    handleUpdate(item.id, sliderValue);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <p>
        Price: £{item.price} <br /> Amount: {item.amount}
      </p>
      {item.style === "button" ? (
        <div>
          <Button onClick={handleAmountDecrease}>-</Button>
          <Button onClick={handleAmountIncrease}>+</Button>
        </div>
      ) : null}
      {item.style === "slider" ? (
        <div>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Slider
                aria-label="Item amount"
                step={1}
                max={16}
                valueLabelDisplay="on"
                value={sliderValue}
                onChange={handleSliderChange}
                marks
              />
            </Grid>
          </Grid>
        </div>
      ) : null}
      <p>Total: £{item.total}</p>
    </div>
  );
};
