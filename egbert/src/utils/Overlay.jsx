import React from 'react';
import {motion, stagger} from 'framer-motion';
import { IoClose } from "react-icons/io5";


const Overlay = ({id, onClose, children}) => {
    const modalVariants = {
        initial: { opacity: 0, y: 20, scale: 0.2 },
        animate: { opacity: 1, y: 0, scale: 1, transition: {staggerChildren: 0.2} },
        exit: { opacity: 0, y: 20, scale: 0.2, transition: { duration: 0.2, ease: 'easeInOut' } },
    };

    const blurVariant = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 1}}
    }
    return (
        <motion.div
            layoutId={id}
            variants={modalVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            key='modal'
            style={{
                position: 'fixed',
                inset: 0,
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5rem 5rem',
                boxSizing: 'border-box',
                zIndex: 9999999 //was a bug making the next.jsx section overlay the overlay
            }}
        >
            <motion.div 
            variants={blurVariant}
            initial='hidden'
            animate='show'
            style={{
                position: 'absolute',
                inset: 0,
                backdropFilter: 'blur(25px)',
                zIndex: 0
            }} />
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    fontSize: '2rem',
                    background: 'transparent',
                    border: 'none',
                    zIndex: 9999999,
                    cursor: 'pointer'
                }}
            >
                <IoClose />
            </button>
            {children}
        </motion.div>
    )
}

export default Overlay