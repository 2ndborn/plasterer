import React, { useState } from 'react';
import {degrees, easeIn, motion} from 'framer-motion';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(prev => !prev)

    const topBar = {
        close: {
            rotate: 0, x: 0, y: 0,
            transition: {duration: 0.2, ease: 'easeInOut'}
        },
        open: { 
            rotate: -405, x: -10, y: 8,
            transition: {duration: 0.2, ease: 'easeInOut'}
        }
    }

    const middleBar = {
        close: {
            opacity: 1,
            transition: {duration: 0.6, delay: 0.6, ease: 'easeInOut'}
        },
        open: { 
            opacity: 0,
            transition: {duration: 0.6, ease: 'easeInOut'}
        }
    }

    const bottomBar = {
        close: {
            rotate: 0, x: 0, y: 0,
            transition: {duration: 0.2, ease: 'easeInOut'}
        },
        open: { 
            rotate: 405, x: -10, y: -8,
            transition: {duration: 0.2, ease: 'easeInOut'}
        }
    }
  return (
    <>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.6, delay: 4.2, ease: 'easeIn'}}
        onClick={handleOpen}
        style={{
            position: 'fixed',
            top: 10,
            right: 10,
            height: '30px',
            width: '40px',
            zIndex: 100,
            cursor: 'pointer'
        }}
        >
            <motion.span
            variants={topBar}
            animate={isOpen ? 'open' : 'close'}
            className={styles.bars} 
            />
            <motion.span 
            variants={middleBar}
            animate={isOpen ? 'open' : 'close'}
            className={styles.bars} 
            />
            <motion.span 
            variants={bottomBar}
            animate={isOpen ? 'open': 'close'}
            className={styles.bars} 
            />
        </motion.div>
        <motion.div
        initial={{scale: 0}}
        animate={{scale: isOpen ? 1 : 0}}
        transition={{duration: 0.6, ease: 'easeInOut'}}
        style={{
            position: 'fixed',
            top: -150,
            right: -150,
            height: 500,
            width: 500,
            color: 'white',
            background: 'black',
            borderRadius: 1000,
            transformOrigin: 'top right',
            zIndex: 99
        }}
        >
            NavBar
        </motion.div>
    </>
  )
}

export default NavBar