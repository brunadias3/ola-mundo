import style from './BotaoPrincipal.module.css'

import React from 'react'

export default function BotaoPrincipal({ children, tamanho }) {
    return (
        <button className={`
    ${style.botaoPrincipal}
    ${style[tamanho]}
    `}>
            {children}
        </button>
    )
}
