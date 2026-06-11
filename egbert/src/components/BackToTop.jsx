import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { FaArrowUp } from "react-icons/fa6";
import { useScrollToSection } from '../hooks/useScrollToSection';
import { useScrollPosition } from '../hooks/useScrollPosition';

const BackToTop = () => {
    const scrollTo = useScrollToSection();
    const show = useScrollPosition(300);

  return (
      <>
          <AnimatePresence>
              {show && (
                  <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => scrollTo('top')}
                      style={{
                          position: 'fixed',
                          bottom: 20,
                          right: 20,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          background: '#2e333e',
                          color: '#fff',
                          padding: '1rem 0.75rem',
                          borderRadius: 5,
                          border: 'none',
                          cursor: 'pointer'
                      }}
                  >
                      <FaArrowUp />
                  </motion.button>
              )}
          </AnimatePresence>
      </>
  )
}

export default BackToTop