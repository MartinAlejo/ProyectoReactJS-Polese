import React, { useEffect, useState } from 'react'
import { products } from '../../productsMock'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {

    setItems(products);

  }, [])

  return (
    <ItemList items={items} />
  )
}