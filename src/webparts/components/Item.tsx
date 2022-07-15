import React from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";

interface Props {
  item: Item;
  handleUpdate: any;
}

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

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
    <Box sx={{ flexGrow: 1 }}>
      <Card>
        <Grid container spacing={1}>
          <Grid item xs={8} sm={8} md={8}>
            <Typography component="div" variant="h6">
              {item.name}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              Quantity: {item.amount}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Typography variant="h6" component="div" align="right">
              £{item.price}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              align="right"
            >
              Total: £{item.total}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            {item.style === "button" ? (
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  onClick={() => handleAmountDecrease(item.id, item.amount)}
                  variant="outlined"
                >
                  -
                </Button>
                <Button
                  onClick={() => handleAmountIncrease(item.id, item.amount)}
                >
                  +
                </Button>
              </ButtonGroup>
            ) : null}
            {item.style === "slider" ? (
              <Slider
                aria-label="Item amount"
                step={1}
                max={16}
                valueLabelDisplay="auto"
                value={sliderValue}
                onChange={handleSliderChange}
                marks
                sx={{ width: "95%", ml: 1 }}
              />
            ) : null}
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              align="right"
            >
              Total: £{item.total}
            </Typography>
          </Grid> */}
        </Grid>
      </Card>
    </Box>
  );
};
