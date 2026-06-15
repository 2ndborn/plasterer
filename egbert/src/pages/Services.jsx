import React, { useEffect, useState } from 'react';
import {AnimatePresence, LayoutGroup, motion} from 'framer-motion';
import styles from '../styles/Services.module.css';
import Reveal from '../utils/Reveal';
import Overlay from '../utils/Overlay';
import PlasteringImg from '../components/PlasteringImg';
import TilingImg from '../components/TilingImg';
import PaintImg from '../components/PaintImg';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { ServiceData } from '../data/ServiceData';


const Services = () => {
    const [isHoverIndex, setIsHoverIndex] = useState(null);
    const [istoggled, setIsToggled] = useState(null);
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 768px)').matches)

    useEffect(() => {
        const media = window.matchMedia('(min-width: 768px)')
        const handleMedia = (e) => {
            setMatches(e.matches)
            console.log(e.matches)
        }
        media.addEventListener('change', handleMedia);
        return () => media.removeEventListener('change', handleMedia)
    }, [])

    const isSmall = useMediaQuery('(min-width: 768px)');

    const handleOpen = (id) => {
        setIsToggled(id)
    }

    const handleClose = () => {
        setIsToggled(null)
    }

    const heading = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0}
    }

    return (
        <div 
        id='services'
        style={{
            position: 'relative',
            minHeight: '75vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            textAlign: 'center',
            fontSize: '1.5rem'
        }}
        >
            <LayoutGroup>
                <Reveal origin='right'>
                    <div
                        style={{
                            padding: '1.5rem',
                            borderRadius: '20px',
                            boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.6), -2px 1px 8px rgba(0, 0, 0, 0.8)',
                            background: '#464D5D',
                            color: '#302f2f',
                        }}
                    >
                        <div>
                            <h2 style={{ color: '#fff', margin: '0 0 1.5rem 0' }}>Services</h2>
                        </div>
                        <div className={styles.SerGrid}>
                            <AnimatePresence>
                                {ServiceData.map((ser, i) => (
                                    <motion.div
                                        key={ser.id}
                                        onMouseEnter={() => setIsHoverIndex(i)}
                                        onMouseLeave={() => setIsHoverIndex(null)}
                                        style={{
                                            position: 'relative',
                                            borderRadius: '15px',
                                            boxShadow: '2px 2px 4px rgba(255, 255, 255, 0.6), -2px 1px 6px rgba(255, 255, 255, 0.8)',
                                            overflow: 'hidden',
                                        }}
                                        whileHover={{ border: '3px solid #fff' }}
                                    >
                                        <img src={ser.image} alt={ser.alt} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                                        <motion.div
                                            whileHover={{ background: 'rgba(0, 0, 0, 0.5)' }}
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: isSmall ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5)',
                                                padding: '1rem',
                                                display: 'grid',
                                                gridTemplateRows: 'repeat(4, 1fr)',
                                            }}
                                        >
                                            <div style={{ gridRow: 'span 3', placeContent: 'center' }}>
                                                {matches ? (
                                                    isHoverIndex === i && (
                                                        <motion.h5
                                                            variants={heading}
                                                            initial='hidden'
                                                            animate='show'
                                                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                                                            style={{ color: '#fff', marginTop: '5rem', lineHeight: '1.4' }}
                                                        >
                                                            Click below to see the {ser.button.toLowerCase()} gallery
                                                        </motion.h5>)
                                                ) : (
                                                    <motion.h5
                                                        style={{ color: '#fff', marginTop: 'min(5rem, 12%)', lineHeight: '1.4' }}
                                                    >
                                                        Click below to see the {ser.button.toLowerCase()} gallery
                                                    </motion.h5>
                                                )}
                                            </div>
                                            <div style={{ gridRow: 'span 2', place: 'center' }}>
                                                <motion.button
                                                    onClick={() => handleOpen(ser.id)}
                                                    aria-label={ser.aria}
                                                    style={{
                                                        boxShadow: 
                                                        '0px 3px 6px rgba(255, 255, 255, 0.6)',
                                                    }}
                                                    whileHover={{ border: '2px solid #fff' }}
                                                >
                                                    {ser.button}
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                    <AnimatePresence>
                        {istoggled && (
                            <Overlay key={istoggled} id={String(istoggled)} onClose={handleClose}>
                                {istoggled === 1 && (<PlasteringImg />)}
                                {istoggled === 2 && (<TilingImg />)}
                                {istoggled === 3 && (<PaintImg />)}
                            </Overlay>
                        )}
            // above had a bug that crash before I left the handleLeft as a prop after id moved it.
                    </AnimatePresence>
                </Reveal>
            </LayoutGroup>
        </div>
    )
}

export default Services