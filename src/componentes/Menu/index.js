import React from 'react'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink'

export default function Menu() {
  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink titulo='Início' to='/' />
            <MenuLink titulo='Sobre Mim' to='/sobremim' />
        </nav>
    </header>
  )
}
