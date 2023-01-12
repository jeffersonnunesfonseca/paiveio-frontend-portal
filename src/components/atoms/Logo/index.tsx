import Image from 'next/image'
import Props from './interface'

export const Logo = ({
    src,
    width,
    height,
    alt,
    link

}: Props ) => {
    width = !width?60:width
    height = !height?60:height
    src = !src?'/icons/logo.png':src
    alt = !alt?'Pai véio': alt
    link = !link?'/': link

    return (
        <a href={link}>
            <Image src={src} alt={alt} width={width} height={height}/>
        </a>
    )
}
