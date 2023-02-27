import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

import { db } from "../../firebaseConfig"
import { collection, doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {

  const { id } = useParams()

  const [product, setProduct] = useState({})

  useEffect (() => {

    const itemCollection = collection(db, "products")

    const ref = doc(itemCollection, id)

    getDoc(ref)
      .then( (res) => {
        setProduct({
          ...res.data(),
          id: res.id
        })
      })
      .catch( (err) => {
        console.log(err)
      })

  }, [id])

  return (
    <ItemDetail product={product} />
  )
}