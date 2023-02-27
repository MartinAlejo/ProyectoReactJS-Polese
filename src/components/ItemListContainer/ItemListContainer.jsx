import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'

import { db } from '../../firebaseConfig'

import { getDocs, collection, query, where } from 'firebase/firestore'

export const ItemListContainer = () => {

  const { categoryName } = useParams()

  const [items, setItems] = useState([])

  useEffect(() => {

    const itemCollection = collection(db, "products")

    if (categoryName) {

      const q = query( itemCollection, where("category", "==", categoryName) )

      getDocs(q)
      .then((res) => {
        const products = res.docs.map( product => {
          return {
            ...product.data(),
            id: product.id
          }
        })

        setItems(products)
      })
      .catch((err) => console.log(err))
    }

    else {
      
      getDocs(itemCollection)
      .then((res) => {
        const products = res.docs.map( product => {
          return {
            ...product.data(),
            id: product.id
          }
        })

        setItems(products)
      })
      .catch((err) => console.log(err))
    }

  }, [categoryName])

  return (
    <ItemList items={items} />
  )
}