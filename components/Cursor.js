import React from 'react'
import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseContext } from '../lib/MouseContext.js'

export default function Cursor() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const variants = {
    default: {
      backgroundColor: '#C400FF',
      height: 24,
      width: 24,
      borderRadius: '12px'
    },
    drag: {
      backgroundColor: 'var(--red)',
      color: '#fff',
      height: 80,
      width: 80,
      fontSize: '24px',
      borderRadius: '40px'
    },
    call: {
      backgroundColor: 'var(--lightGrey)',
      fontSize: '32px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    write: {
      backgroundColor: 'var(--lightGrey)',
      fontSize: '32px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    heart: {
      backgroundColor: '#ffffff00',
      fontSize: '40px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    home: {
      backgroundColor: 'var(--pink)',
      fontSize: '40px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    about: {
      backgroundColor: 'var(--light)',
      fontSize: '21px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    pitch: {
      backgroundColor: 'var(--black)',
      color: '#fff',
      fontSize: '21px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    camera: {
      backgroundColor: 'var(--pink)',
      fontSize: '40px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    branding: {
      backgroundColor: 'var(--black)',
      fontSize: '40px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    design: {
      backgroundColor: 'var(--red)',
      fontSize: '40px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    web: {
      backgroundColor: 'var(--orange)',
      fontSize: '40px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    shop: {
      backgroundColor: 'var(--green)',
      fontSize: '40px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    subscription: {
      backgroundColor: 'var(--light)',
      fontSize: '40px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    },
    map: {
      backgroundColor: 'var(--lightGrey)',
      fontSize: '40px',
      height: 80,
      width: 80,
      borderRadius: '40px',
    }
  };

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const setDefaultVariant = () => {
    setCursorVariant('default')
    setCursorText('')
  }

  const setDragVariant = () => {
    setCursorVariant('drag')
    setCursorText('< >')
  }

  const setCallVariant = () => {
    setCursorVariant('call')
    setCursorText('☎️')
  }

  const setWriteVariant = () => {
    setCursorVariant('write')
    setCursorText('👩‍💻')
  }

  const setHeartVariant = () => {
    setCursorVariant('heart')
    setCursorText('❤️')
  }

  const setHomeVariant = () => {
    setCursorVariant('home')
    setCursorText('🏠')
  }

  const setAboutVariant = () => {
    setCursorVariant('about')
    setCursorText('Læs')
  }

  const setPitchVariant = () => {
    setCursorVariant('pitch')
    setCursorText('Pitch')
  }

  const setCameraVariant = () => {
    setCursorVariant('camera')
    setCursorText('📸')
  }

  const setBrandingVariant = () => {
    setCursorVariant('branding')
    setCursorText('👕')
  }

  const setDesignVariant = () => {
    setCursorVariant('design')
    setCursorText('🎭')
  }

  const setWebVariant = () => {
    setCursorVariant('web')
    setCursorText('⌨️')
  }

  const setShopVariant = () => {
    setCursorVariant('shop')
    setCursorText('💰')
  }

  const setSubscriptionVariant = () => {
    setCursorVariant('subscription')
    setCursorText('🤝')
  }

  const setMapVariant = () => {
    setCursorVariant('map')
    setCursorText('🚁')
  }

  useEffect(() => {
    {
      cursorType === 'drag' ? setDragVariant()
      :
      cursorType === 'call' ? setCallVariant()
      :
      cursorType === 'write' ? setWriteVariant()
      :
      cursorType === 'home' ? setHomeVariant()
      :
      cursorType === 'heart' ? setHeartVariant()
      :
      cursorType === 'about' ? setAboutVariant()
      :
      cursorType === 'pitch' ? setPitchVariant()
      :
      cursorType === 'camera' ? setCameraVariant()
      :
      cursorType === 'branding' ? setBrandingVariant()
      :
      cursorType === 'design' ? setDesignVariant()
      :
      cursorType === 'web' ? setWebVariant()
      :
      cursorType === 'shop' ? setShopVariant()
      :
      cursorType === 'subscription' ? setSubscriptionVariant()
      :
      cursorType === 'map' ? setMapVariant()
      : setDefaultVariant()
    }
  }, [cursorType])

  return (
    <motion.div
      variants={variants}
      className='cursor'
      animate={cursorVariant}
      transition={springConfig}
      style={{
        top: cursorYSpring,
        left: cursorXSpring,
      }}
    >
    <span className='cursorText'>{cursorText}</span>
    </motion.div>
  );
}
