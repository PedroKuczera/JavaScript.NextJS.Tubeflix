'use client'

import { useEffect, useState } from 'react'
import style from './HighlightVideo.module.css'
import { getRandomItem, objectToArray } from '@/helpers/helpers'
import Link from 'next/link'

const videos = {
    "FNU5ibUuPHY": {
        "title": "Grandes fugas com morgan freeman - alcatraz | history",
        "description": "A prisão de alcatraz e a grande fuga de 1962: confira todos os detalhes neste episódio completo da série grandes fugas com morgan freeman. quatro homens conspiraram para escapar de uma das prisões históricas mais famosas do mundo. três deles conseguiram chegar ao mar... no entanto, o que aconteceu com eles quando fugiram da ilha permanece um mistério até hoje",
        "tags": ["Vídeos", "Documentários e Informativos"]
    },
    "kdPkjhueabU": {
        "title": "O melhor de trato feito - rick tem que comprar | history",
        "description": "Nesta seleção dos melhores momentos de trato feito: rick harrison fica obcecado em ter certos itens chegando em sua loja e não quer deixá-los ir. você estaria disposto a pagar quantias enormes de dinheiro? uma caixa de habanos que pertenceu a j.f.k., mustang de steve mcqueen, dois pôsteres de filmes de steve mcqueen e uma lendária guitarra jimi hendrix fender stratocaster",
        "tags": ["Vídeos", "Documentários e Informativos"]
    },
    "gcB4ay_fO1k": {
      "title": "Cassete Lofi Nostálgico",
      "description": "Uma playlist lofi com vibes de fita cassete. Sons retrô para momentos de estudo ou reflexão.",
      "tags": ["Músicas", "Lo-Fi Relaxantes"]
    },
    "Gvx-DAzR-4k": {
      "title": "Lofi para Calmaria",
      "description": "Um mix de duas horas de lofi hip hop para relaxar. Ideal para criar um ambiente sereno e produtivo.",
      "tags": ["Músicas", "Lo-Fi Relaxantes"]
    }
}

export default function HighlightVideo({ tag }) {
    const [ video, setVideo ] = useState(null)

    useEffect(() => {
        const videosList = objectToArray(videos)
        .filter(video => tag == undefined || video.tags.includes(tag))
        setVideo(getRandomItem(videosList))
    }, [])

    return (
        video && (
            <div className={style.video}>
                <div className={style.thumbnail} 
                    style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.key}/maxresdefault.jpg), url(https://img.youtube.com/vi/${video.key}/default.jpg)` }}></div>
                <div className={style.details}>
                    <h2 className={style.title}>{video.title}</h2>
                    <p className={style.description}>{video.description}</p>
                    <Link href='#' className={style.play}>Assistir</Link>
                </div>
                
            </div>
        )
    )
}