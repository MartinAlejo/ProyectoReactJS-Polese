import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { toast } from 'react-toastify';

import { db } from "../../firebaseConfig"
import { collection, doc, getDoc } from "firebase/firestore"
import { NotFound } from "../NotFound/NotFound"
import { CircularProgress } from "@mui/material"

export const ItemDetailContainer = () => {

  const { id } = useParams()

  const [product, setProduct] = useState({})

  const [productNotFound, setProductNotFound] = useState(false)

  const { addToCart, getQuantityById } = useContext( CartContext )

  const onAdd = ( cantidad ) => {
    const obj = {
      ...product,
      quantity: cantidad
    }

    addToCart(obj)

    fireToast()
  }

  const fireToast = () => {
    toast.success('El producto se agrego al carrito', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  }

  const quantity = getQuantityById(product.id)

  useEffect (() => {

    const itemCollection = collection(db, "products")

    const ref = doc(itemCollection, id)

    getDoc(ref)
      .then( (res) => {
        
        if (!res.data()) {
          setProductNotFound(true)
        }
        
        setProduct({
          ...res.data(),
          id: res.id
        })

      })
      .catch( (err) => {
        console.log(err)
      })

  }, [id])

  if (Object.keys(product).length === 0) {
    return <CircularProgress size="10vh" style={{alignSelf: "center", marginTop: "auto", marginBottom: "auto"}} />
  }

  return (
    productNotFound ? <NotFound /> : <ItemDetail product={product} onAdd={onAdd} quantity={quantity} />
  )
}