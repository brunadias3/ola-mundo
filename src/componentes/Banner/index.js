import styles from './Banner.module.css'
import { circuloColorido, minhaFotoJPEG } from '../../assets'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Curso de rotas em React Javascript. Estou adorando conhecer
                    novas tecnologias e espero aprender muito mais!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                className={styles.minhaFoto}
                src={minhaFotoJPEG}
                alt="Foto da Bruna"></img>

            </div>
        </div>
    )
}
