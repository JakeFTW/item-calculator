import React from "react";
import { useState } from "react";
import { Item } from "./Item";
import TotalBar from "./TotalBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// array of items to be displayed in the list
const initialItems: Item[] = [
  {
    id: 0,
    name: "Item 1",
    price: 100,
    amount: 0,
    total: 0,
    style: "slider",
    category: "cat1",
    display: true,
  },
  {
    id: 1,
    name: "Item 2",
    price: 150,
    amount: 0,
    total: 0,
    style: "slider",
    category: "cat1",
    display: false,
  },
  {
    id: 2,
    name: "Item 3",
    price: 350,
    amount: 0,
    total: 0,
    style: "button",
    category: "cat2",
    display: true,
  },
];

export default function ItemGroup() {
  const [items, setItems] = useState(initialItems);

  // update the amount of an item
  const handleUpdate = (index: any, amount: any, remove?: any) => {
    const item: Item = {
      id: items[index].id,
      name: items[index].name,
      price: items[index].price,
      amount: amount,
      total: amount * items[index].price,
      style: items[index].style,
      category: items[index].category,
      display: remove ? false : true,
    };
    const newItems = [...items];
    newItems[index] = item;
    setItems(newItems);
    console.log(newItems);
  };

  // map through the items and return a list of Item components
  // const itemsGroup = items.map((items: any) => (
  //   <Grid item xs={12} sm={6} md={4} xl={3}>
  //     <Item key={items.id} item={items} handleUpdate={handleUpdate} />
  //   </Grid>
  // ));

  // calculate total price of all items
  const groupTotal = items.reduce(
    (total: any, currentValue: any) => (total = total + currentValue.total),
    0
  );

  //filter items by category
  const cat1 = items.filter((item: any) => {
    return item.category === "cat1" && item.display === true;
  });
  const cat2 = items.filter((item: any) => {
    return item.category === "cat2" && item.display === true;
  });

  //display category 1 items
  const cat1Items = cat1.map((items: any) => (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Item key={items.id} item={items} handleUpdate={handleUpdate} />
    </Grid>
  ));

  //display category 2 items
  const cat2Items = cat2.map((items: any) => (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Item key={items.id} item={items} handleUpdate={handleUpdate} />
    </Grid>
  ));

  return (
    <>
      <Box sx={{ flexGrow: 1, px: 2 }}>
        <Typography component="div" variant="h6" sx={{ my: 1 }}>
          Category 1
        </Typography>
        <Grid container spacing={2}>
          {cat1Items}
        </Grid>
        <Typography component="div" variant="h6" sx={{ my: 1 }}>
          Category 2
        </Typography>
        <Grid container spacing={2}>
          {cat2Items}
        </Grid>
      </Box>
      <TotalBar groupTotal={groupTotal} />
    </>
  );
}
