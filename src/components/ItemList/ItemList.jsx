import { Grid } from "@mui/material"
import { ProductCard } from "../ProductCard/ProductCard"

export const ItemList = ({items}) => {

  return (
    <Grid container>
      {items.map((element) => {
        return (<Grid item xs={12} md={6} lg={3} key={element.id} display="flex" justifyContent="center"> <ProductCard element={element} /> </Grid>)
      })}
    </Grid>
  )
}