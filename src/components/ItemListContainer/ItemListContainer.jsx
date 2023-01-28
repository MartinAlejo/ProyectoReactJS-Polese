import { Typography } from '@mui/material'
import React from 'react'

export const ItemListContainer = ({greeting}) => {
  return (
    <Typography variant="h2" sx={{m: 4, p: 1, border: 3, borderRadius: 10, display: "flex", justifyContent: "center"}}>{greeting}</Typography>
  )
}