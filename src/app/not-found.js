import Image from 'next/image'
import style from './not-found.module.css'

export default function NotFoundPage () {
    return (
        <div className={style.notFound}>
            <h2>404 | Página não encontrada</h2>
            <div className={style.imageWrapper}>
                <Image src='/404-background.png' fill style={{ objectFit: 'cover' }} alt='Alien olhando para a página que não foi encontrada' />
            </div>
        </div>
    )
}