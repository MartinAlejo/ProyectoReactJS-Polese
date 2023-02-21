import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const addToCart = ( product ) => {
    if (isInCart(product.id)) {
      // Si el producto esta en el carrito, se actualiza su cantidad

      let newCart = cart.map( (cartProd) => {
        if (cartProd.id === product.id) {
          let updatedProduct = {
            ...cartProd,
            quantity: product.quantity
          }

          return updatedProduct
        }
        else {
          return cartProd
        }
      })
        
      setCart(newCart)
    }
    else {
      // Si el producto no esta en el carrito simplemente se agrega

      setCart( [...cart, product] )
    }
  }

  const clearCart = () => {
    setCart( [] )
  }

  const deleteProductById = ( id ) => {
    let newCart = cart.filter( (prod) => prod.id !== id)

    return newCart
  }

  const isInCart = ( id ) => {

    return cart.some( (prod) => prod.id === id )
  }

  const getQuantityById = ( id ) => {

    let product = cart.find( (prod) => prod.id === id)

    return product.quantity
  }

  const getTotalItems = () => {

    const totalItems = cart.reduce( (acc, prod) => {
      return acc + prod.quantity
    }, 0)

    return totalItems
  }

  const getTotalPrice = () => {
    const totalPrice = cart.reduce( (acc, prod) => {
      return acc + (prod.quantity * prod.price)
    }, 0)

    return totalPrice
  }

  const data = {
    cart: cart,
    addToCart,
    clearCart,
    deleteProductById,
    isInCart,
    getQuantityById,
    getTotalItems,
    getTotalPrice
  }

  return (
    <CartContext.Provider value={data} >
      {children}
    </CartContext.Provider>
  )
}