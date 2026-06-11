import React from 'react';
import { motion} from 'framer-motion';
import styles from '../styles/NavBar.module.css';

const NavItems = ({isOpen}) => {
    const menuVariant = {
        show: {
            transition: {
                staggerChildren: 1
            }
        }
    }

    const itemVariant = {
        hidden: (custom) => ({
            '--angle': custom.start,
            opacity: 0
        }),
        show: (custom) => ({
            '--angle': custom.end,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.6,
                ease: 'easeOut'
            }
        })
    }

    return (
        <motion.div 
        className={styles.radialMenu}
        variants={menuVariant}
        initial="hidden"
        animate={isOpen ? "show" : "hidden"}
        >
            <motion.div
                className={styles.item}
                custom={{ start: 90, end: 90 }}
                variants={itemVariant}
                initial="hidden"
                animate={isOpen ? "show" : "hidden"}
            >
                Home
            </motion.div>
            <motion.div
                className={styles.item}
                custom={{ start: 90, end: 65 }}
                variants={itemVariant}
                initial="hidden"
                animate={isOpen ? "show" : "hidden"}
            >
                Services
            </motion.div>
            <motion.div
                className={styles.item}
                custom={{ start: 90, end: 36 }}
                variants={itemVariant}
                initial="hidden"
                animate={isOpen ? "show" : "hidden"}    
            >
                Gallery
            </motion.div>
        </motion.div>
    )
}

export default NavItems