import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion'
import plasterhero from '../assets/plaster_hero.webp';
import painthero from '../assets/paint_hero.webp';

const CarouselComponent = () => {
  const images = [{
    src: plasterhero,
    alt: "Finished plastered coat on wall"
  }, 
  {
    src: painthero,
    alt: "Finished paint grey wall"
  }]

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
        src={images[prevIndex].src}
        alt={images[prevIndex].alt}
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
        src={images[index].src}
        alt={images[index].alt}
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
