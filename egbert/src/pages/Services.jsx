import React from 'react';
import {motion} from 'framer-motion';
import plaster from '../assets/plaster.jpg';
import painting from '../assets/painting.webp';
import tile from '../assets/tile.jpg';

const Services = () => {
    const service = [
        {image: plaster, button: 'Plastering'},
        {image: tile, button: 'Tiling'},
        {image: painting, button: 'Paint & Decorating'},
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
            <div
                style={{
                    padding: '1.5rem',
                    borderRadius: '20px',
                    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), -2px 1px 4px rgba(0, 0, 0, 0.2)',
                    background: 'rgba(0, 0, 0, 0.1)'
                }}
            >
                <div>
                    <h2>Services</h2>
                </div>
                <div
                    style={{
                        height: '50vh',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridTemplateRows: '1fr',
                        textAlign: 'center',
                        gap: '20px'
                    }}
                >
                    {service.map((ser, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'relative',
                                borderRadius: '15px',
                                overflow: 'hidden'
                            }}
                        >
                            <img src={ser.image} style={{ height: '100%', width: '100%', objectFit: 'cover'}} />
                            <motion.div 
                            whileHover={{background: 'rgba(0, 0, 0, 0.2)',}}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0, 0, 0, 0.5)',
                                alignContent: 'flex-end',
                                paddingBottom: '3rem'
                                }}
                            >
                                <button>{ser.button}</button>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services