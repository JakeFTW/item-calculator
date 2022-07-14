import React from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", width: 500 }}>
          <Typography component="div" variant="h5">
            {item.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Price: £{item.price} <br /> Amount: {item.amount}
          </Typography>
        </CardContent>
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
            <Slider
              aria-label="Item amount"
              step={1}
              max={16}
              valueLabelDisplay="on"
              value={sliderValue}
              onChange={handleSliderChange}
              marks
              sx={{ mx: 2, mt: 2 }}
            />
          </div>
        ) : null}
        <p>Total: £{item.total}</p>
      </Box>
    </Card>
  );
};
