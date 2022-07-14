import React from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";

interface Props {
  item: Item;
  handleUpdate: any;
}

export const Item: React.FC<Props> = ({ item, handleUpdate }) => {
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
          <Button onClick={() => handleAmountDecrease(item.id, item.amount)}>
            -
          </Button>
          <Button onClick={() => handleAmountIncrease(item.id, item.amount)}>
            +
          </Button>
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
