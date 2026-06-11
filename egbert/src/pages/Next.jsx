import React from 'react';
import {motion} from 'framer-motion';
import styles from '../styles/Next.module.css';
import Reveal from '../utils/Reveal';

import { FiPhone } from "react-icons/fi";
import { GrSchedule } from "react-icons/gr";
import { LuClipboardPenLine } from "react-icons/lu";

const Next = () => {
    const heading = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0}
    }
    const steps = [
        {id: 1, icon: <FiPhone />, title: "Call me"},
        {id: 2, icon: <GrSchedule />, title: "Schedule a visit"},
        {id: 3, icon: <LuClipboardPenLine />, title: "Generate a quote"},
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
            <Reveal origin='left'>
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
                    <h2 style={{color: '#fff', margin: '0 0 1.5rem 0'}}>Next Steps</h2>
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
                                <div style={{fontSize: '3rem', margin: '1.5rem  0'}}>{step.icon}</div>
                                {step.id === 1 ? (
                                    <button 
                                        style={{
                                            minWidth: '150px',
                                            padding: '0.75rem',
                                            borderRadius: '10px',
                                            background: '#d7fc03',
                                            color: '#3B403E',
                                            fontSize: '1.2rem',
                                            fontWeight: 525,
                                            border: 'none',
                                            boxShadow: '0px 3px 6px rgba(255, 255, 255, 0.6)',
                                            cursor: 'pointer',
                                            marginBottom: '1.5rem'
                                        }}
                                    >
                                        Contact me
                                    </button>
                                ) : (
                                    <h4 style={{margin: '2rem 0', lineHeight: 1.4}}>{step.title}</h4>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            </Reveal>
        </div>
    )
}

export default Next