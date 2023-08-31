import React from 'react'
import PropTypes from "prop-types"

export const ClientView = ({client}) => {
  
  const { name: nameClient, lastName, address:{country, city, street, number} } = client
  

  return (
    <ul className="list-group">
      <li className="list-group-item active">{nameClient} {lastName}</li>
      <li className="list-group-item">{country} / {city}</li>
      <li className="list-group-item">{street} {number}</li>
    </ul>
  )
}

ClientView.propTypes={
 
  client:PropTypes.object.isRequired
}
