import React from 'react';
import Reveal from '../utils/Reveal';

const About = () => {
  return (
    <div
    style={{
        position: 'relative',
        minHeight: '50vh',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}
    >
        <Reveal origin='left' overlayColor='rgba(0, 0, 0, 0.2)'>
            <div style={{
                  fontSize: '1.5rem',
                  color: '#292828',
                  textAlign: 'center'
              }}>
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
        </Reveal>
    </div>
  )
}

export default About