import React, { useState } from 'react';
import {motion} from 'framer-motion';
import styles from '../styles/Services.module.css';
import plaster from '../assets/plaster.jpg';
import painting from '../assets/painting.webp';
import tile from '../assets/tile.jpg';
import Reveal from '../utils/Reveal';
import { main } from 'motion/react-client';

const Services = () => {
    const [isHoverIndex, setIsHoverIndex] = useState(null)

    const heading = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0}
    }
    const service = [
        {image: plaster, alt: 'Plastered room', button: 'Plastering', },
        {image: tile, alt: 'Tiling room', button: 'Tiling'},
        {image: painting, alt: 'Paint & Decorated reoom', button: 'Paint & Decorating'},
    ]
    return (
        <div style={{
            position: 'relative',
            minHeight: '75vh',
            padding: '2rem',
            textAlign: 'center',
            fontSize: '1.5rem'
        }}
        >
            <Reveal origin='right' overlayColor='#fff'>
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
                    {service.map((ser, i) => (
                        <motion.div
                            key={i}
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
                                alignContent: 'flex-end',
                                padding: '1rem',
                                
                                }}
                            >
                                <div style={{ height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {isHoverIndex === i && (
                                <motion.h5
                                    variants={heading}
                                    initial='hidden'
                                    animate='show'
                                    transition={{duration: 0.6, ease: 'easeInOut'}}
                                   style={{color: '#fff', margin: 0, lineHeight: '1.4'}} 
                                >
                                    Click below to see the {ser.button.toLowerCase()} gallery
                                </motion.h5>
                                )}
                                </div>
                                <motion.button
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
                                    marginBottom: '2rem',
                                    cursor: 'pointer'
                                }}
                                whileHover={{border: '2px solid #fff'}}
                                >
                                    {ser.button}
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
            </Reveal>
        </div>
    )
}

export default Services