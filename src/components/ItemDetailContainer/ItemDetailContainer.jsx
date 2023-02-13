import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { products } from "../../productsMock"

export const ItemDetailContainer = () => {

  const { id } = useParams()

  const [product, setProduct] = useState({})

  useEffect (() => {
    setProduct(products.find( prod => prod.id === Number(id) ))
  }, [])

  return (
    <div>{product.description}</div>
  )
}