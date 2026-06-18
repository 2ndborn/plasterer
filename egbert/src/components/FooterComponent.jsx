import React from 'react';
import {motion} from 'framer-motion';
import Reveal from '../utils/Reveal'

const FooterComponent = () => {
    return (
        <div
            id='footer'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '1.25rem',
                color: '#fff',
                background: 'linear-gradient(180deg, #464D5D 0%, #464d5de5 100%)',
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
                        07551 085 183
                    </motion.p>
                </div>
                <div>
                    <p style={{fontSize: '1rem'}}>
                        Based in London and Outer London, but available for work elsewhere.
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