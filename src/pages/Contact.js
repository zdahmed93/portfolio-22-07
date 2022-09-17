import React from 'react'

const informations = {
  email: 'rayencherif748@gmail.com',
  phone: '+216 99 701 976',
  address: {
    country: 'Tunisie',
    city: 'Sfax',
    street: 'Route Bouzayen Km 4',
    postalCode: 3020
  }
}

function Contact() {
  return (
    <div>
      <div className='contact-item'>
        <i className="fa-solid fa-envelope custom-icon"></i>
        <p className='contact-text'>{informations.email}</p>
      </div>
      <div className='contact-item'>
        <i className="fa-solid fa-phone custom-icon"></i>
        <p className='contact-text'>{informations.phone}</p>
      </div>
      <div className='contact-item'>
        <i className="fa-solid fa-location-dot custom-icon"></i>
        <p className='contact-text'>{informations.address.street} {informations.address.country} {informations.address.city} {informations.address.postalCode}</p>
      </div>
    </div>
  )
}

export default Contact