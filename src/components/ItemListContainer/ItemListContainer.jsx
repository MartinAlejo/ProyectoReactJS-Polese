import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../productsMock'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {

  const { categoryName } = useParams()

  const [items, setItems] = useState([])

  useEffect(() => {

    if (categoryName) {
      setItems(products.filter( (prod) => prod.category === categoryName ))
    }
    else {
      setItems(products);
    }

  }, [categoryName])

  return (
    <ItemList items={items} />
  )
}