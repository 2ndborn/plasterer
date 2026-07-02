import { useState } from 'react';
import {motion} from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Hertford from '../assets/Hertford.jpeg';
import plas from '../assets/plas.png';

const PlasteringImg = () => {
    const [index, setIndex] = useState(0);
    const image = [Hertford, plas];

    const hasPlaceholder = image.length <= 5;
    // if image array has 5 images or less use null array
    const images = hasPlaceholder ? [...image, null] : image;

    // const handleRight = () => {
    //     setIndex(prev => (prev + 1) % image.length)
    // }

    // const handleLeft = () => {
    //     setIndex(prev => (prev - 1 + image.length) % image.length)
    // }
    const atStart = index === 0;
    const atEnd = index === images.length - 1;

    const handleRight = () => {
        setIndex(i => Math.min(i + 1, images.length - 1));
    };

    const handleLeft = () => {
        setIndex(i => Math.max(i - 1, 0));
    };

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            background: 'white',
            border: '2px solid #fff',
        }}>
            {hasPlaceholder && images[index] === null ? (
                <div
                    style={{
                        height: '100%',
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#7884a0'
                    }}
                >
                    <h2>More images coming soon...</h2>
                </div>
            ) : (
                <img 
                style={{
                    objectFit: 'contain', 
                    height: "100%", 
                    width: "100%"
                    }} 
                src={images[index]} alt='image' 
                />
            )}
            <motion.button
                className='unstyledBtn'
                aria-label='Previous slide'
                onClick={handleLeft}
                disabled={atStart}
                style={{
                    opacity: atStart ? 0.4 : 1,
                    cursor: atStart ? "not-allowed" : "pointer",
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
                disabled={atEnd}
                onClick={handleRight}
                style={{
                    opacity: atEnd ? 0.4 : 1,
                    cursor: atEnd ? "not-allowed" : "pointer",
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