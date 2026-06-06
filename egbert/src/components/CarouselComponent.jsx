import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import plaster from '../assets/plaster.jpg'
import painting from '../assets/painting.webp'
import tile from '../assets/tile.jpg'

const CarouselComponent = () => {
  const images = [plaster, painting, tile]

  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)

  const incomingAnim = useAnimation()
  const outgoingAnim = useAnimation()

  // Morph: prevIndex → index
  useEffect(() => {
    if (index === prevIndex) return

    // reset states
    incomingAnim.set({
      opacity: 0,
      filter: 'blur(20px)',
      scale: 1.1
    })

    outgoingAnim.set({
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1
    })

    // fade IN new image
      incomingAnim.start({
          opacity: 1,
          filter: 'blur(0px)',
          scale: 1,
          transition: { duration: 1.2, ease: 'easeInOut' }
      }).then(() => {
          // start Ken Burns zoom AFTER fade-in
          incomingAnim.start({
              scale: 1.1,
              transition: { duration: 10, ease: 'linear' }
          })
      })

    // fade OUT old image
    outgoingAnim.start({
      opacity: 0,
      filter: 'blur(20px)',
      scale: 1.2,
      transition: { duration: 1.2, ease: 'easeInOut' }
    })
  }, [index, prevIndex])

  // Interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        const next = (prev + 1) % images.length
        setPrevIndex(prev)
        return next
      })
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Outgoing image (previous) */}
      <motion.img
        animate={outgoingAnim}
        src={images[prevIndex]}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

      {/* Incoming image (current) */}
      <motion.img
        animate={incomingAnim}
        src={images[index]}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  )
}

export default CarouselComponent
