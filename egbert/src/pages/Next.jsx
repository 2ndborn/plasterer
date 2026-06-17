import React from 'react';
import {motion} from 'framer-motion';
import styles from '../styles/Next.module.css';
import Reveal from '../utils/Reveal';

import { FiPhone } from "react-icons/fi";
import { GrSchedule } from "react-icons/gr";
import { LuClipboardPenLine } from "react-icons/lu";

const Next = () => {
   
    const steps = [
        {id: 1, icon: <FiPhone />, title: "Call me"},
        {id: 2, icon: <GrSchedule />, title: "Schedule a visit"},
        {id: 3, icon: <LuClipboardPenLine />, title: "Generate a quote"},
    ]
    return (
        <div 
        id='steps'
        style={{
            position: 'relative',
            minHeight: '75vh',
            padding: '2rem',
            textAlign: 'center',
            fontSize: '1.5rem'
        }}
        >
            {/* <Reveal origin='left'> */}
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
                    <h2 style={{color: '#fff', margin: '0 0 1.5rem 0'}}>Next Steps...</h2>
                </div>
                <div className={styles.NextGrid}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            style={{
                                position: 'relative',
                                borderRadius: '15px',
                                background: '#fff',
                                boxShadow: '2px 2px 4px rgba(255, 255, 255, 0.6), -2px 1px 6px rgba(255, 255, 255, 0.8)',
                                padding: '20px',
                                overflow: 'hidden',
                            }}
                        >
                            <div data-name={step.id} className={styles.InnerNext}>
                                <div style={{ fontSize: '3rem', margin: '1.5rem  0' }}>{step.icon}</div>
                                {step.id === 1 ? (
                                    <motion.a
                                        href='Tel:07551085183'
                                        style={{
                                            display: 'inline-block',
                                            minWidth: '125px',
                                            boxShadow: '0px 3px 6px rgba(115, 115, 115, 0.6)',
                                            marginBottom: '1.5rem',
                                            padding: '0.75rem 1.25rem',
                                            backgroundImage: 'radial-gradient(ellipse 125% 100% at 50% 20%, #d7fc03 0%, #a7c404 100%)',
                                            color: '#3b403ec6',
                                            borderRadius: '10px',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                            fontSize: '1rem',
                                        }}               
                                        whileHover={{border: '2px solid #fff', 
                                            backgroundImage: `radial-gradient(
                                            ellipse 125% 100% at 50% 20%, #d7fc03 0%, #a7c40455 100%)`,
                                        }}
                                    >
                                        Contact me
                                    </motion.a>
                                ) : (
                                    <h4 style={{margin: '2rem 0', lineHeight: 1.4}}>{step.title}</h4>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* </Reveal> */}
        </div>
    )
}

export default Next