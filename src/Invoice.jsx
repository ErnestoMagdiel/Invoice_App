import React, { useEffect, useState } from 'react'
import { getInvoice, calculateTotal } from './services/getInvoice'
import { InvoiceView } from './componentes/InvoiceView'
import { ClientView } from './componentes/ClientView'
import { CompanyView } from './componentes/CompanyView'
import { ListItemView } from './componentes/ListItemView'
import { TotalView } from './componentes/TotalView'
import { FormItemsView } from './componentes/FormItemsView'

const invoiceInitial = {
  id: 0,
  name: '',
  client: {
    name: '',
    lastName: "",
    address: {
      country: '',
      city: '',
      street: '',
      number: 0
    }
  },
  company: {
    name: '',
    fiscalNumber: 0,
  },
  items: []
}


export const Invoice = () => {

  const [activeForm,setActiveForm]=useState(false)

  const [total, setTotal] = useState(0)

  const [counter, setCounter] = useState(4)

  const [invoice, setInvoice] = useState(invoiceInitial)

  const [items, setItems] = useState([])

  const { id, name, client, company } = invoice


  useEffect(() => {
    const data = getInvoice()
    setInvoice(data)
    setItems(data.items)
  }, [])

  useEffect(() => {
    setTotal(calculateTotal(items))
  }, [items])

  const handlerAddInvoiceItems = ({product,price,quantity}) => {
   
    setItems([...items, { 
      id: counter, 
      product: product.trim(), 
      price: +price.trim(), 
      quantity: parseInt(quantity.trim(), 10) 
    }])
    // console.log(items)
    // setFormItemsState({product:"",price:"",quantity:""})
    setCounter(counter + 1)

  }

  const handlerDeleteItem=(id)=>{
setItems(items.filter(item=>item.id!==id))
  }
  const onActiveForm=()=>{
    setActiveForm(!activeForm)
  }

  return (
    <>

      <div className="container ">
        <div className='card my-3'>
          <div className='card-header'>
            Ejemplo de Factura
          </div>
          <div className='card-body'>
            <InvoiceView id={id} name={name} />

            <div className='row my-3'>
              <div className='col'>
                <h3>Datos del cliente</h3>
                <ClientView client={client} />
              </div>
              <div className='col'>

                <CompanyView title="Datos de la Empresa" company={company} />
              </div>
            </div>
            <ListItemView title="Productos de la factura" items={items} handlerDeleteItem={handlerDeleteItem} />
            <TotalView total={total} />
            <button className='btn btn-secondary' onClick={onActiveForm}>{!activeForm?"Agregar Item":"Ocultar Form"}</button>
            {!activeForm || <FormItemsView handler={handlerAddInvoiceItems}/> }           

          </div>
        </div>
      </div>
    </>
  )
}
