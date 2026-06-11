import React, { useState } from 'react';
import {AnimatePresence, LayoutGroup, motion} from 'framer-motion';
import styles from '../styles/Services.module.css';
import plaster from '../assets/plaster.jpg';
import painting from '../assets/painting.webp';
import tile from '../assets/tile.jpg';
import Reveal from '../utils/Reveal';
import { IoClose } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Overlay from '../utils/Overlay';
import PlasteringImg from '../components/PlasteringImg';

const Services = () => {
    const [isHoverIndex, setIsHoverIndex] = useState(null);
    const [istoggled, setIsToggled] = useState(null);

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
    const service = [
        {id: 1, image: plaster, alt: 'Plastered room', button: 'Plastering', },
        {id: 2, image: tile, alt: 'Tiling room', button: 'Tiling'},
        {id: 3, image: painting, alt: 'Paint & Decorated reoom', button: 'Paint & Decorating'},
    ]
    return (
        <div style={{
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
                    <h2 style={{color: '#fff', margin: '0 0 1.5rem 0'}}>Services</h2>
                </div>
                <div className={styles.SerGrid}>
                    <AnimatePresence mode='wait'>
                    {service.map((ser, i) => (
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
                            whileHover={{border: '3px solid #fff'}}
                        >
                            <img src={ser.image} alt={ser.alt} style={{ height: '100%', width: '100%', objectFit: 'cover'}} />
                            <motion.div 
                            whileHover={{background: 'rgba(0, 0, 0, 0.5)'}}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0, 0, 0, 0.2)',
                                padding: '1rem',
                                display: 'grid',
                                gridTemplateRows: 'repeat(4, 1fr)',
                                }}
                            >
                                <div style={{gridRow: 'span 3', placeContent: 'center' }}>
                                {isHoverIndex === i && (
                                <motion.h5
                                    variants={heading}
                                    initial='hidden'
                                    animate='show'
                                    transition={{duration: 0.6, ease: 'easeInOut'}}
                                   style={{color: '#fff', marginTop: '5rem', lineHeight: '1.4'}} 
                                >
                                    Click below to see the {ser.button.toLowerCase()} gallery
                                </motion.h5>
                                )}
                                </div>
                                <div style={{gridRow: 'span 2', place: 'center'}}>
                                <motion.button
                                onClick={() => handleOpen(ser.id)}
                                style={{
                                    minWidth: '150px',
                                    padding: '0.75rem',
                                    borderRadius: '10px',
                                    background: '#d7fc03',
                                    color: '#3B403E',
                                    fontSize: '1.2rem',
                                    fontWeight: 525,
                                    border: 'none',
                                    boxShadow: '0px 3px 6px rgba(255, 255, 255, 0.6)',
                                    cursor: 'pointer'
                                }}
                                whileHover={{border: '2px solid #fff'}}
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
            <AnimatePresence mode='wait'>
            {istoggled && (
                <Overlay key={istoggled} id={String(istoggled)} onClose={handleClose}>
                    {istoggled === 1 && (<PlasteringImg />)}
                    {istoggled === 2 && (<div>2</div>)}
                    {istoggled === 3 && (<div>3</div>)}
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