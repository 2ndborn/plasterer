import React from 'react';
import Reveal from '../utils/Reveal';

const About = () => {
  return (
    <div
    id='about'
    style={{
        position: 'relative',
        minHeight: '50vh',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}
    >
        <Reveal origin='left'>
            <div style={{
                  fontSize: '1.5rem',
                  color: '#fff',
                  textAlign: 'center'
              }}>
                  <div
                  style={{
                      padding: 'min(2rem, 5%)',
                      borderRadius: '20px',
                      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), -2px 1px 4px rgba(0, 0, 0, 0.2)',
                      background: '#464D5D'
                    }}
                    >
                      <h2 style={{margin: 0}}>About me</h2>
                      <p style={{fontSize: 'clamp(1.1rem, 0.955rem + 0.73vw, 1.5rem)'}}>
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