import React from 'react'
import plaster from '../assets/plaster.jpg';
import { motion} from 'framer-motion';

const Home = () => {

    const container = {
        hidden: {opacity: 0,},
        show: {opacity: 1}
    }

    const overlay = {
        hidden: {scaleY: 0},
        show: {scaleY: 1},
        border: {borderBottom: 'none'}
    }

    const text = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0}
    }

  return (
        <div>
            <motion.div
                style={{ height: "100vh" }}
                variants={container}
                initial='hidden'
                animate='show'
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <img
                    src={plaster}
                    alt="image of a plastered wall"
                    style={{ height: "100%", width: "100%", objectFit: 'cover' }}
                />
                <motion.div
                    variants={overlay}
                    initial='hidden'
                    animate='show'
                    transition={{ duration: 0.6, delay: 1, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        transformOrigin: 'top'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 1, delay: 2, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            height: '10px',
                            width: '100%',
                            background: '#fff'
                        }}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(9, 1fr)', placeContent: 'center', width: '100%', height: '100%', color: '#fff', textAlign: 'center' }}>
                        <div style={{ gridArea: '4 / 1 / span 3 / -1'}}>
                            <motion.h1
                                variants={text}
                                initial='hidden'
                                animate='show'
                                transition={{ duration: 1, delay: 1.7, ease: 'easeInOut' }}
                                style={{ fontSize: '5rem' }}
                            >
                                Augustus Finishing Co.
                            </motion.h1>
                        </div>
                        <div style={{ position: 'relative', fontSize: '1.5rem', gridArea: '8 / 1 / span 1 / 1' }}>
                            <motion.p
                                variants={text}
                                initial='hidden'
                                animate='show'
                                transition={{ duration: 1, delay: 2, ease: 'easeInOut' }}
                            >
                                Plastering
                            </motion.p>
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 1, ease: 'easeInOut', delay: 3 }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '2px',
                                    height: '100%',
                                    background: '#fff',
                                    transformOrigin: 'center'
                                }}
                            />
                        </div>
                        <div style={{ fontSize: '1.5rem', gridArea: '8 / 2 / span 1 / 2' }}>
                            <motion.p
                                variants={text}
                                initial='hidden'
                                animate='show'
                                transition={{ duration: 1, delay: 2, ease: 'easeInOut' }}
                            >
                                Tiling
                            </motion.p>
                        </div>
                        <div style={{ position: 'relative', fontSize: '1.5rem', gridArea: '8 / 3 / span 1 / -1' }}>
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 1, ease: 'easeInOut', delay: 3 }}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    width: '2px',
                                    height: '100%',
                                    background: '#fff',
                                    transformOrigin: 'center'
                                }}
                            />
                            <motion.p
                                variants={text}
                                initial='hidden'
                                animate='show'
                                transition={{ duration: 1, delay: 2, ease: 'easeInOut' }}
                            >
                                Painting
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Home