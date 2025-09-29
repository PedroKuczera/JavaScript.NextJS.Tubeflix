import HighlightVideo from '@/components/HighlightVideo'
import style from './page.module.css'
import VideoTags from '@/components/VideoTags'

export function generateMetadata() {
    return {
        title: `Músicas - Tubeflix `
    }
}

export default function MusicsPage() {
    return (
        <>
            <HighlightVideo tag='Músicas' />
            <VideoTags tag='Músicas' />
        </>
    )
}