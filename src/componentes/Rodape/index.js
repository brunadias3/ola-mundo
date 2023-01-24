import styles from './Rodape.module.css'
import React from 'react'
import { MarcaRegistrada } from '../../assets'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada />

        Desenvolvido por Alura.
    </footer>
  )
}
