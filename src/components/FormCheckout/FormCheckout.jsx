import { Button, TextField } from "@mui/material"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../firebaseConfig"

export const FormCheckout = ({cart, total, setOrder, clearCart}) => {

  const [userInfo, setUserInfo] = useState({name: "", email: "", phone: ""})
  const [emailConfirmation, setEmailConfirmation] = useState(null)

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
    <>
      <div style={{width: "50vw", alignSelf: "center", border: "2px solid gray", borderRadius: "20px", padding: "30px", marginBottom: "8vh"}}>
        <h2> <i> <u> Detalles: </u> </i> </h2>
        <h3> Total: ${total.toLocaleString()} </h3>
        <h3> Productos:  </h3>
        {cart.map( (item) => { return <li key={item.id} style={{marginBottom: "3vh"}}> {item.title} <b> ({item.quantity}) </b> </li>})}
      </div>
      <div style={{width: "50vw", alignSelf: "center", border: "2px solid gray", borderRadius: "20px", padding: "30px", marginBottom: "8vh"}}>
        <h3>Por favor, complete con sus datos</h3>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column"}}>
          <TextField label="Nombre completo" variant="outlined" sx={{mt: 3}} onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} required/>
          <TextField label="E-mail" type="email" variant="outlined" sx={{mt: 3}} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} required/>
          <TextField label="Confirmar e-mail" type="email" variant="outlined" sx={{mt: 3}} onChange={(e) => setEmailConfirmation( e.target.value )} required/>
          <TextField label="Teléfono" type="tel" variant="outlined" sx={{mt: 3}} onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})} required/>
          <Button type="submit" size="small" variant="contained" sx={{mt: 3}} disabled={userInfo.email !== emailConfirmation}>Finalizar compra</Button>
        </form>
      </div>
    </>
  )
}