import React from 'react';
import Reveal from '../utils/Reveal';

const About = () => {
  return (
    <div
    style={{
        position: 'relative',
        minHeight: '50vh',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}
    >
        <Reveal origin='left' overlayColor='rgba(0, 0, 0, 0.1)'>
            <div style={{
                  fontSize: '1.5rem',
                  color: '#585555',
                  textAlign: 'center'
              }}>
                  <div
                  style={{
                      padding: '1rem',
                      borderRadius: '20px',
                      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), -2px 1px 4px rgba(0, 0, 0, 0.2)',
                      background: 'rgba(0, 0, 0, 0.1)'
                    }}
                    >
                      <h2>About me</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Necessitatibus, quaerat
                        enim! Ducimus dolores velit vel est eveniet,
                        assumenda odit culpa unde similique nesciunt!
                        Sed quaerat autem a provident consequuntur!
                        Harum? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Corporis culpa libero aliquid
                        earum, assumenda consequuntur consequatur iste
                        qui perspiciatis autem quam modi molestias,
                        quod eos atque ducimus quos maiores illum.
                    </p>
                  </div>
              </div>
        </Reveal>
    </div>
  )
}

export default About