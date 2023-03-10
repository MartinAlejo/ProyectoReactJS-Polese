
export const FinishBuy = ({order}) => {

  return (
    <div style={{alignSelf: "center", border: "2px solid gray", borderRadius: "20px", padding: "30px", marginBottom: "8vh"}}>
      <h1> <u>  Su compra fue realizada exitosamente </u> </h1>
      <h3> El ID de su compra es: {order.id}</h3>
      <h2> <i> Información del comprador: </i> </h2>
      <li style={{marginBottom: "3vh"}}> Nombre completo: {order.buyer.name} </li>
      <li style={{marginBottom: "3vh"}}> E-mail: {order.buyer.email} </li>
      <li style={{marginBottom: "3vh"}}> Teléfono: {order.buyer.phone} </li>
      <h2> <i> <u> Detalles: </u> </i> </h2>
      <h3> Total: ${order.total.toLocaleString()} </h3>
      <h3> Productos:  </h3>
      {order.items.map( (item) => { return <li key={item.id} style={{marginBottom: "3vh"}}> {item.title} <b> ({item.quantity}) </b> </li>})}
    </div>
  )
}