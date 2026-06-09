import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion'

const Reveal = ({ children, origin, overlayColor }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const mainControls = useAnimation();
    const innerControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('show').then(() => {
                mainControls.start('second')
            })
            innerControls.start('show')
        }
    }, [isInView, mainControls, innerControls])

    const overlay = {
        hidden: { scaleX: 0 },
        show: {
            scaleX: 1,
            transition: { duration: 0.4, ease: 'easeIn' }
        },
        second: {
            background: overlayColor,
            transition: {
                duration: 1, ease: 'easeOut'
            }
        }
    }

    const inner = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1, y: 0,
            transition: { duration: 0.8, delay: 0.5, ease: 'easeIn' }
        }
    }
    return (
        <div ref={ref}>
            <motion.div
                variants={overlay}
                initial='hidden'
                animate={mainControls}
                style={{
                    position: 'absolute',
                    inset: 0,
                    transformOrigin: origin,
                    background: '#464D5D',
                    zIndex: -1
                }}
            />
            <motion.div
                variants={inner}
                initial='hidden'
                animate={innerControls}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal