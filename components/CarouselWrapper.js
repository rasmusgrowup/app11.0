import scss from '../styles/carousel.module.scss'
import images from '../utils/work.js'
import Image from 'next/image'
import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

function CarouselWrapper() {
  return (
    <>
      <section className={scss.wrapper}>
        <div className={scss.inner}>
          {images.map(({title, url, height, width}) => (
            <div className={scss.image} key={title}>
              <Image src={url} height={height} width={width} quality='100'/>
              <span>{title}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CarouselWrapper
