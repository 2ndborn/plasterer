import React, { useEffect, useRef } from 'react'
import plaster from '../assets/plaster.jpg';
import {motion, useInView} from 'framer-motion';

const Home = () => {

    const container = {
        hidden: {opacity: 0,},
        show: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: 'easeIn'
            }
        }
    }

  return (
    <div>
          <motion.div 
          style={{ height: "100vh", background: 'grey' }}
          variants={container}
          initial='hidden'
          animate='show'
          >
              <img
                  src={plaster}
                  alt="image of a plastered wall"
                  style={{ height: "100%", width: "100%", objectFit: 'cover' }} 
              />
              <div style={{position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.25)', display: 'flex', alignItems: 'center', paddingLeft: '2rem'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '60%', height: '50%', background: 'rgba(0, 0, 0, 0.4)', color: '#fff', textAlign: 'center', fontSize: '1.25rem'}}>
                    <h1 style={{fontSize: '3rem'}}>Augustus Finishing Co.</h1>
                      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: '2rem 0' }}>
                          <div style={{padding: '1rem'}}>Plastering</div>
                          <div style={{ borderLeft: '2px solid #fff', borderRight: '2px solid #fff', padding: '1rem' }}>Paint & Decorating</div>
                          <div style={{padding: '1rem'}}>Tiling</div>
                      </div>
                </div>
              </div>
          </motion.div>
    </div>
  )
}

export default Home