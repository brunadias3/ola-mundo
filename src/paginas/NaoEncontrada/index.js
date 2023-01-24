import style from './NaoEncontrada.module.css'
import { erro404 } from '../../assets'

export default function NaoEncontrada() {
    return (
        <>
            <div className={style.conteudoContainer}>
                <span className={style.texto404}>404</span>

                <h1 className={style.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={style.paragrafo}>
                    Tem certeza de que era isso que você estava
                    procurando?
                </p>

                <p className={style.paragrafo}>
                    Aguarde uns instantes e recarregue a
                    página, ou volte para a página inicial.
                </p>

                <div className={style.botaoContainer}>
                    <button>Voltar</button>
                </div>

                <img
                    className={style.imagemCachorro}
                    src={erro404}
                    alt='Cachorro de oculos e vestido como humano'
                />
            </div>
            <div className={style.espacoEmBranco}/>
        </>
    )
}
