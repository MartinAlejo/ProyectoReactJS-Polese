import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart = () => {

  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext( CartContext )

  console.log(cart)

  return (

    <div style={{alignSelf: "center"}}><h1> <b> CARRITO </b> </h1>
      {cart.map( (prod) => { 
        return <div key={prod.id} style={{border: "2px solid black", padding: "10px", marginBottom: "15px"}}>
          <h3> Nombre: {prod.title} </h3>
          <h3> Precio: {prod.price.toLocaleString()} </h3>
          <h3> Cantidad: {prod.quantity} </h3>
          <button onClick={() => deleteProductById(prod.id)}> Remover del Carrito </button>
        </div>
      })}
      <h1><b> PRECIO TOTAL: </b> ${getTotalPrice().toLocaleString()} </h1>
      <button onClick={() => clearCart()} style={{marginTop: "30px", marginBottom: "30px", marginLeft: "12px"}}> Vaciar carrito </button>
    </div>
  )
}