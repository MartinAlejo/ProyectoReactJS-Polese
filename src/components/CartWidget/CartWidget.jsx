import { Badge } from '@mui/material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export const CartWidget = () => {
  return (
    <Badge badgeContent={2} color="error">
      <ShoppingCartRoundedIcon />
    </Badge>
  )
}