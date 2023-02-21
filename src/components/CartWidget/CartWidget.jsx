import { Badge } from '@mui/material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

  const { getTotalItems } = useContext(CartContext)

  return (
    <Badge badgeContent={getTotalItems()} color="error">
      <ShoppingCartRoundedIcon />
    </Badge>
  )
}