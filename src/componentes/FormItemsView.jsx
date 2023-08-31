import React, { useEffect, useState } from 'react'

export const FormItemsView = ({handler}) => {

  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: ""
  }
  )
  const { product, price, quantity } = formItemsState

  useEffect(()=>{

  },[price])

  useEffect(()=>{

  },[formItemsState])

  const onInputChange = ({ target:{name,value} }) => {
    // console.log(name)
    // console.log(value)
    setFormItemsState({
      ...formItemsState,
      [name]: value
    })
  }

  const onInvoiceItems = (e) => {
    e.preventDefault();
    if (product.trim().length <= 1) return;
    if (price.trim().length <= 1) return;
    if (isNaN(price.trim())) return;
    if (quantity.trim().length < 1) {
      alert("El precio no es un numero")
      return
    }
    if (isNaN(quantity.trim())) return;

    // setItems([...items, { id: counter, product: product.trim(), price: +price.trim(), quantity: parseInt(quantity.trim(), 10) }])
    // console.log(items)
    handler(formItemsState);
    setFormItemsState({product:"",price:"",quantity:""})
    // setCounter(counter + 1)

  }
  return (
    <>
      <form className="w-50" onSubmit={onInvoiceItems}>
        <input
          className="form-control my-2"
          type="text" name="product"
          value={product}
          placeholder='product'
          onChange={onInputChange} />

        <input
          className="form-control my-2 "
          type="text"
          name="price"
          value={price}
          placeholder='price'
          onChange={onInputChange} />
        <input
          className="form-control my-2 "
          type="text"
          name="quantity"
          value={quantity}
          placeholder='quantity'
          onChange={onInputChange} />
        <button
          type="submit"
          className='btn btn-primary m-3'>
          Nuevo Item
        </button>
      </form>
    </>

  )
}
