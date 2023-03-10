
export const FinishBuy = ({order}) => {

  console.log(order)

  return (
    <div>Su compra fue realizada exitosamente. El ID de su compra es: {order.id} </div>
  )
}