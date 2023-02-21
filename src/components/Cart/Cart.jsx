import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart = () => {

  const { cart } = useContext( CartContext )

  console.log(cart)

  return (

    <div style={{alignSelf: "center"}}><h1> <b> CARRITO </b> </h1>
      {cart.map( (prod) => { 
        return <div key={prod.id} style={{border: "2px solid black", padding: "10px", marginBottom: "15px"}}>
          <h3> Nombre: {prod.title} </h3>
          <h3> Precio: {prod.precio} </h3>
          <h3> Cantidad: {prod.quantity} </h3>
        </div>
      })}
    </div>
  )
}