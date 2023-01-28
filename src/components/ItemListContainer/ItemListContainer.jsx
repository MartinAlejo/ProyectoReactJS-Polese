import { Typography } from '@mui/material'
import React from 'react'

export const ItemListContainer = ({greeting}) => {
  return (
    <Typography variant="h2" sx={{m: 2}}>{greeting}</Typography>
  )
}