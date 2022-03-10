import scss from '../styles/carousel.module.scss'
import images from '../utils/work.js'
import Image from 'next/image'

export default function Carousel() {
  return (
    <>
      <section className={scss.wrapper}>
        {images.map(({title, url, height, width}) => (
          <div className={scss.image} key={title}>
            <Image src={url} height={height} width={width} quality='100'/>
            <span>{title}</span>
          </div>
        ))}
      </section>
    </>
  )
}
