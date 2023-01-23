import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from '../Menu/Menu.module.css'

import React from 'react'

export default function MenuLink({ titulo, to }) {
  const localizacao = useLocation();

  return (
    // <Link className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ""} `} to={to} >
    //   {titulo}
    // </Link>

    <NavLink to={to} style={({ isActive }) => isActive ? styles.linkDestacado : ""} end >
      {titulo}
    </NavLink>
  )
}
