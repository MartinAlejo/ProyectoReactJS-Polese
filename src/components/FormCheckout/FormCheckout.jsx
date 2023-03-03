import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../firebaseConfig"

export const FormCheckout = ({cart, total, setOrderId, clearCart}) => {

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
        (res) => setOrderId(res.id)
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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su email" onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} />
        <input type="text" placeholder="Ingrese su teléfono" onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})} />
        <button>Comprar</button>
      </form>
    </div>
  )
}