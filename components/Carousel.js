import scss from '../styles/carousel.module.scss'
import images from '../utils/work.js'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function Carousel() {
  const carousel = useRef(null);

  return (
    <>
      <motion.div className={scss.wrapper} ref={carousel}>
        <motion.div
          drag='x'
          dragConstraints={carousel}
          dragElastic={0.025}
          className={scss.inner}>
            {images.map(({title, url, height, width, id}) => (
              <motion.div className={scss.image} key={id}>
                <Image src={url} layout='responsive' height={height} width={width} quality='100'/>
                <span>{title}</span>
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Carousel
