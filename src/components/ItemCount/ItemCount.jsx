import { Button } from "@mui/material"
import { useState } from "react"

export const ItemCount = ({stockInicial}) => {

  const [contador, setContador] = useState(0)
  const [stock, setStock] = useState(stockInicial)

  const restar = () => {
    if (contador > 0) {
      setContador( contador - 1 )
      setStock(stock + 1)
    }
  }

  const sumar = () => {
    if (stock > 0) {
      setContador( contador + 1 )
      setStock(stock - 1)
    }
  }

  const agregarAlCarrito = () => {

    if (contador === 0) {
      return
    }

    console.log(`Se agregaron ${contador} unidades de este producto al carrito`)
    setContador(0)
  }

  return (
    <>
      <div style={ {display: "flex", alignItems: "center"} }>
        <Button variant="outlined" onClick={restar} sx={{ml:5, mr: 1}} disabled={contador === 0}>-</Button>
        <h2>{contador}</h2>
        <Button variant="outlined" onClick={sumar} sx={{ml: 1, mr: 5}} disabled={stock <= 0}>+</Button>
        <Button variant="outlined" onClick={agregarAlCarrito}>Agregar al carrito</Button>
      </div>
    </>
  )
}