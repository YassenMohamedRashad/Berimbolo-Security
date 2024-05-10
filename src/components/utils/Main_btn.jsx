import React from 'react'
import { Link } from 'react-router-dom';
import {Colors} from "../utils/Colors"

function Main_btn({text,href,StyleClass=null}) {
  return (
    <Link type="button" to={ href } className={ "text-white focus:outline-none focus:ring-4 rounded-full py-2.5 text-center me-2 mb-2 " + StyleClass } style={{backgroundColor : Colors.extra_dark}}>{text}</Link>
  )
}

export default Main_btn