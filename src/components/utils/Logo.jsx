import React from 'react'
import { Link } from 'react-router-dom';

function Logo() {
  return (
      <Link to={"/"} className='font-extrabold text-xl text-white'>Berimbolo<span className=' text-blue-500'>Security</span></Link>
  )
}

export default Logo