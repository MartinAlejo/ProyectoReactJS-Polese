import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { FinishBuy } from "../FinishBuy/FinishBuy"
import { FormCheckout } from "../FormCheckout/FormCheckout"

export const Cart = () => {

  const { cart, clearCart, deleteProductById, getTotalPrice, isEmpty } = useContext( CartContext )

  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState(null);

  console.log(cart)

  if (orderId) {
    // Si el usuario ya finalizo la compra
    return (
      <FinishBuy orderId={orderId} />
    )
  }

  if (buy) {
    // Si el usuario va a finalizar la compra
    return <FormCheckout cart={cart} total={getTotalPrice()} setOrderId={setOrderId} />
  }

  if (isEmpty()) {
    return <div>Carrito vacío</div>
  }

  return (
    <div style={{alignSelf: "center"}}>
      <h1> <b> CARRITO </b> </h1>
      {cart.map( (prod) => { 
        return <div key={prod.id} style={{border: "2px solid black", padding: "10px", marginBottom: "15px"}}>
          <h3> Nombre: {prod.title} </h3>
          <h3> Precio: {prod.price.toLocaleString()} </h3>
          <h3> Cantidad: {prod.quantity} </h3>
          <button onClick={() => deleteProductById(prod.id)}> Remover del Carrito </button>
        </div>
      })}
      <h1><b> PRECIO TOTAL: </b> ${getTotalPrice().toLocaleString()} </h1>
      <button onClick={() => setBuy(true)} style={{marginTop: "30px", marginBottom: "30px", marginLeft: "12px"}}> Ir a finalizar compra </button>
      <button onClick={() => clearCart()} style={{marginTop: "30px", marginBottom: "30px", marginLeft: "12px"}}> Vaciar carrito </button>
    </div>
  )
}