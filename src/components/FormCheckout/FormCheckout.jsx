import { Button, TextField } from "@mui/material"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../firebaseConfig"

export const FormCheckout = ({cart, total, setOrder, clearCart}) => {

  const [userInfo, setUserInfo] = useState({ email: "", phone: ""})

  const handleSubmit = (e) => {
    e.preventDefault()

    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
      date: serverTimestamp(),
    }

    const ordersCollection = collection(db, "orders")

    // Agregamos el documento (la orden) a la collection (de orders)
    addDoc(ordersCollection, order)
      .then(
        (res) => setOrder({...order, id: res.id})
      )
      .catch(
        (err) => console.log(err)
      )
    
    // Actualizamos el stock de los productos que compramos
    for (let product of cart) {
      let refDoc = doc(db, "products", product.id)

      let updatedStock = { stock: product.stock - product.quantity }
      
      updateDoc(refDoc, updatedStock)
    }
    
    clearCart()
  }

  return (
    <div style={{alignSelf: "center", border: "2px solid gray", borderRadius: "20px", padding: "30px"}}>
      <h3>Por favor, complete con sus datos</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column"}}>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" sx={{mt: 3}} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} />
        <TextField id="outlined-basic" label="Teléfono" variant="outlined" sx={{mt: 3}} onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})} />
        {/* <input type="text" placeholder="Ingrese su email" onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} />
        <input type="text" placeholder="Ingrese su teléfono" onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})} /> */}
        <Button type="submit" size="small" variant="contained" sx={{mt: 3}}>Comprar</Button>
      </form>
    </div>
  )
}