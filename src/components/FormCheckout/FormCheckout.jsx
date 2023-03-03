import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../firebaseConfig"

export const FormCheckout = ({cart, total, setOrderId}) => {

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

    addDoc(ordersCollection, order)
      .then(
        (res) => setOrderId(res.id)
      )
      .catch(
        (err) => console.log(err)
      )
    
    console.log("Se realizo la compra")
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