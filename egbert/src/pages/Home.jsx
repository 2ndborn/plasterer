import React from 'react';
import { motion} from 'framer-motion';
import styles from '../styles/Home.module.css';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {

    const container = {
        hidden: {opacity: 0,},
        show: {opacity: 1}
    }

    const overlay = {
        hidden: {clipPath: "inset(0 0 100% 0)"},
        show: {clipPath: "inset(0 0 0% 0)"},
        border: {borderBottom: 'none'}
    }

    const text = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0}
    }

  return (
        <div id='top'>
            <motion.div
                style={{ height: "100dvh", background: '#464D5D', overflow: 'hidden' }}
                variants={container}
                initial='hidden'
                animate='show'
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <CarouselComponent />
                <motion.div
                    variants={overlay}
                    initial='hidden'
                    animate='show'
                    transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgb(70, 77, 93) 0%, rgba(0, 0, 0, 0.5) 100%)',
                        // display: 'flex',
                        // alignItems: 'center',
                        transformOrigin: 'top',
                        padding: 0,
                        overflow: 'hidden'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 1, delay: 2.6, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            height: '2px',
                            width: '100%',
                            background: '#fff'
                        }}
                    />
                    <div className={styles.HomeGrid} style={{boxSizing: 'border-box', padding: '2rem 0.75rem'}}>
                        <div>
                            <motion.h1
                                variants={text}
                                initial='hidden'
                                animate='show'
                                transition={{ duration: 1, delay: 2, ease: 'easeInOut' }}
                                style={{ fontSize: 'clamp(2.5rem, 2rem + 3vw, 4rem)' , margin: 0 }}
                            >
                                Augustus Finishing Co.
                            </motion.h1>
                        </div>
                        <div>
                            <motion.p
                                variants={text}
                                initial='hidden'
                                animate='show'
                                transition={{ duration: 1, delay: 2.7, ease: 'easeInOut' }}
                            >
                                Plastering
                            </motion.p>
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 1, ease: 'easeInOut', delay: 3.7 }}
                                className={styles.VerticalLine}
                                style={{right: 0}}
                            />
                        </div>
                        <div>
                            <motion.p
                                variants={text}
                                initial='hidden'
                                animate='show'
                                transition={{ duration: 1, delay: 2.7, ease: 'easeInOut' }}
                            >
                                Tiling
                            </motion.p>
                        </div>
                        <div>
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 1, ease: 'easeInOut', delay: 3.7 }}
                                className={styles.VerticalLine}
                                style={{ left: 0}}
                            />
                            <motion.p
                                variants={text}
                                initial='hidden'
                                animate='show'
                                transition={{ duration: 1, delay: 2.7, ease: 'easeInOut' }}
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