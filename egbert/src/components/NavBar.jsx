import React, { useRef, useState } from 'react';
import { motion} from 'framer-motion';
import styles from '../styles/NavBar.module.css';
import NavItems from './NavItems';
import { useClickOutside } from '../hooks/useClickOutside';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(prev => !prev)
    const menuRef = useRef(null);
    const linkRef = useRef(null);

    useClickOutside([menuRef, linkRef], () => {
        setIsOpen(false)
    })

    const topBar = {
        close: {
            rotate: 0, x: 0, y: 0,
            transition: {duration: 0.2, ease: 'easeInOut'}
        },
        open: { 
            rotate: -405, x: -10, y: 10,
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
          <motion.button
              ref={menuRef}
              className='unstyledBtn'
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 4.2, ease: 'easeIn' }}
              onClick={handleOpen}
              style={{
                  position: 'fixed',
                  top: 10,
                  right: 10,
                  height: '30px',
                  width: '40px',
                  zIndex: 999,
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
                  animate={isOpen ? 'open' : 'close'}
                  className={styles.bars}
              />
          </motion.button>
          <motion.div
              ref={linkRef}
              initial={{ scale: 0 }}
              animate={{ scale: isOpen ? 1 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{
                  position: 'fixed',
                  top: -150,
                  right: -150,
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  height: 500,
                  width: 500,
                  color: 'white',
                  background: '#2e333e',
                  borderRadius: 1000,
                  transformOrigin: 'top right',
                  zIndex: 99
              }}
          >
              <NavItems isOpen={isOpen} handleOpen={handleOpen} />
          </motion.div>
      </>
  )
}

export default NavBar