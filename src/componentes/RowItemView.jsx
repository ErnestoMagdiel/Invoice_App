import React from 'react'

export const RowItemView = ({product,price,id,quantity,handlerDeleteItem}) => {
  return (
    <>
      <tr >
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button className="btn btn-danger"onClick={()=>handlerDeleteItem(id)}>Eliminar</button></td>
      </tr>
    </>
  )
}
