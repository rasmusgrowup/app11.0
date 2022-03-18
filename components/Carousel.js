import scss from '../styles/carousel.module.scss'
import images from '../utils/work.js'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState, useContext } from 'react'
import { MouseContext } from '../lib/MouseContext.js'

function Carousel() {
  const carousel = useRef(null);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [loaded, setLoaded] = useState(false);

  const mouseDown = (e) => {
    carousel.current.style.cursor = 'none'
    e.preventDefault();
  }

  const mouseUp = (e) => {
    carousel.current.style.cursor = 'none'
  }

  return (
    <>
      <motion.div
        className={`${scss.wrapper} noMouse`}
        ref={carousel}
        onMouseEnter={() => cursorChangeHandler("drag")}
        onMouseLeave={() => cursorChangeHandler("")}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        >
        <motion.div
          drag='x'
          dragDirectionLock
          dragConstraints={carousel}
          dragElastic={0.04}
          className={`${scss.inner} noMouse`}>
            {images.map(({title, url, height, width, id, type, bg}) => (
              <motion.div className={scss.image} key={id} style={{ backgroundColor: `${bg}`}}>
              {
                type != 'video' ?
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
                  <Image src={url} layout='responsive' objectFit='cover' objectPosition='center' height={height} width={width} quality='100' sizes='30vw'/>
                </motion.div>
                :
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className={scss.videoWrapper}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    width='100%'
                    height='auto'
                    alt=''
                    >
                    <source src={url} type='video/mp4' />
                  </video>
                </motion.div>
              }
                <span style={{ display: 'none' }}>{title}</span>
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Carousel
