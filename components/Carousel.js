import scss from '../styles/carousel.module.scss'
import images from '../utils/work.js'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState, useContext } from 'react'
import { MouseContext } from '../lib/MouseContext.js'

function Carousel() {
  const carousel = useRef(null);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const mouseDown = (e) => {
    carousel.current.style.cursor = 'grabbing'
    e.preventDefault();
  }

  const mouseUp = (e) => {
    carousel.current.style.cursor = 'default'
  }

  return (
    <>
      <motion.div
        className={`${scss.wrapper} grab`}
        ref={carousel}
        onMouseEnter={() => cursorChangeHandler("drag")}
        onMouseLeave={() => cursorChangeHandler("")}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        >
        <motion.div
          drag='x'
          dragConstraints={carousel}
          dragElastic={0.025}
          className={`${scss.inner} grab`}>
            {images.map(({title, url, height, width, id, type, bg}) => (
              <motion.div className={scss.image} key={id} style={{ backgroundColor: `${bg}`}}>
              {
                type != 'video' ?
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
                  <Image src={url} layout='responsive' objectFit='cover' objectPosition='center' height={height} width={width} quality='100'/>
                </motion.div>
                :
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} style={{ display: 'flex' }}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    width='100%'
                    height='100%'
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
