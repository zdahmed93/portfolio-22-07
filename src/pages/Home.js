import React from 'react'
import webImage from '../images/web.png'

function Home() {
  return (
    <div className='alert alert-primary'>
      <img src="/images/my-photo.jpg" alt="My Photo" className='avatar' />
      <h1>Hello My name is Rayen. I am a Fullstack Web Developer</h1>
      <img src={webImage} alt="Web Development" />
    </div>
  )
}

export default Home