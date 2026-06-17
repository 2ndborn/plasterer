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
        border: '2px solid red'
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
            <h2 style={{ margin: 0 }}>About me</h2>
            <p style={{ fontSize: 'clamp(1.1rem, 0.955rem + 0.73vw, 1.5rem)' }}>
              My name is Billy Reid. With more than 40 years of hands‑on experience 
              in the trade, I specialise in delivering high‑quality plastering, 
              tiling, and finishing work. Over the decades, I’ve refined my craft 
              through thousands of projects, always focusing on clean lines, smooth 
              finishes, and a standard of workmanship that stands the test of time. 
              I take pride in offering a reliable, professional service 
              the kind built on experience, consistency, and genuine care for 
              the homes I work in.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default About