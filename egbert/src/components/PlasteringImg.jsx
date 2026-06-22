import { useState } from 'react';
import {motion} from 'framer-motion';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Hertford from '../assets/Hertford.jpeg';
import plas from '../assets/plas.png';

const PlasteringImg = () => {
    const [index, setIndex] = useState(0);

    // const array = [1, 2, 3];
    const image = [Hertford, plas];

    const handleRight = () => {
        setIndex(prev => (prev + 1) % image.length)
    }

    const handleLeft = () => {
        setIndex(prev => (prev - 1 + image.length) % image.length)
    }

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            background: 'white',
            border: '2px solid #fff',
        }}>
            <img 
            style={{
                objectFit: 'contain', 
                height: "100%", 
                width: "100%"
                }} 
            src={image[index]} alt='image' 
            />
            <motion.button
                className='unstyledBtn'
                aria-label='Previous slide'
                onClick={handleLeft}
                style={{
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    padding: '7px 10px 0 7px',
                    background: 'whitesmoke',
                    boxShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                    borderRadius: 5
                }}
                whileHover={{background: 'rgb(221, 221, 221'}}
            >
                <FaChevronLeft />
            </motion.button>
            <motion.button
                className='unstyledBtn'
                aria-label='Next slide'
                onClick={handleRight}
                style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    padding: '7px 7px 0 10px',
                    background: 'whitesmoke',
                    boxShadow: '-1px 1px 4px rgba(0,0,0,0.5)',
                    borderRadius: 5
                }}
                whileHover={{background: 'rgb(221, 221, 221'}}
            >
                <FaChevronRight />
            </motion.button>
        </div>
    )
}

export default PlasteringImg