import {motion} from 'framer-motion';
import styles from '../styles/Next.module.css';
import Reveal from '../utils/Reveal';

import { FiPhone } from "react-icons/fi";
import { GrSchedule } from "react-icons/gr";
import { LuClipboardPenLine } from "react-icons/lu";
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Next = () => {
   
    const steps = [
        {id: 1, icon: <FiPhone />, title: "Call me"},
        {id: 2, icon: <GrSchedule />, title: "Schedule a visit"},
        {id: 3, icon: <LuClipboardPenLine />, title: "Generate a quote"},
    ]

    const isSmall = useMediaQuery('(max-width: 600px)');
    const scrollTo = useScrollToSection();
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
                                    <motion.button
                                        onClick={() => {
                                            if(isSmall) {
                                                window.location.href = 'tel:07551085183'
                                            } else {
                                               scrollTo('footer') 
                                            }
                                        }}
                                        href={isSmall ? 'Tel:07551085183' : '#footer'}
                                        style={{marginBottom: '1.5rem'}}               
                                        whileHover={{border: '2px solid #fff', 
                                            backgroundImage: `radial-gradient(
                                            ellipse 125% 100% at 50% 20%, #d7fc03 0%, #a7c40455 100%)`,
                                        }}
                                    >
                                        Contact me
                                    </motion.button>
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