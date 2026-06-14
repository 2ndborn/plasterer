import React from 'react';
import {motion} from 'framer-motion';
import Reveal from '../utils/Reveal'

const FooterComponent = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '1.25rem',
                color: '#fff',
                background: '#464D5D',
                padding: '0.5rem 1rem'
            }}
        >
            <Reveal origin='left'>
                <div>
                    <h4>For an enquiry, please call me on:</h4>
                    <motion.p
                    animate={{scale: [1, 1.05, 1]}}
                    transition={{duration: 2, repeat: Infinity, ease: 'easeInOut'}}
                     style={{ fontSize: '1.5rem' }}
                    >
                        07900 111 222
                    </motion.p>
                </div>
                <div>
                    <p style={{fontSize: '1rem'}}>
                        I mainly operate in London and Outer London,
                        but am open to jobs in other locations.
                    </p>
                </div>
                <div>
                    <h6>
                        Augustus Finishing Co. &copy;{" "}
                        {new Date().getFullYear()} All rights reserved.
                    </h6>
                </div>
            </Reveal>
        </div>
    )
}

export default FooterComponent