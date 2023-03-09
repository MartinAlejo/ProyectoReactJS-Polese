import { Button } from "@mui/material"
import { useEffect, useState } from "react"

export const ItemCount = ({initial = 1, stockInicial, onAdd}) => {

  const [contador, setContador] = useState(initial)
  const [stock, setStock] = useState(stockInicial)
  
  useEffect( ()=>{
    setContador(initial)
  }, [initial])

  useEffect( ()=>{
    setStock(stockInicial)
  }, [stockInicial])

  const restar = () => {
    if (contador > 0) {
      setContador( contador - 1 )
    }
  }

  const sumar = () => {
    if (stock > contador) {
      setContador( contador + 1 )
    }
  }

  return (
    <>
      <div style={ {display: "flex", alignItems: "center"} }>
        <Button variant="outlined" onClick={restar} sx={{ml:5, mr: 1}} disabled={contador === 1}> - </Button>
        <h2>{contador}</h2>
        <Button variant="outlined" onClick={sumar} sx={{ml: 1, mr: 5}} disabled={stock <= contador}> + </Button>
      </div>
      <div>
        <Button variant="outlined" onClick={() => onAdd(contador)} sx={{mb: 1}} disabled={stock === 0}> Agregar al carrito </Button>
      </div>
    </>
  )
}