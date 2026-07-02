import { useState } from 'react';
import {motion} from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PaintImg = () => {
    const [index, setIndex] = useState(0);

    const image = [];
    const hasPlaceholder = image.length <= 5;
    const images = hasPlaceholder ? [...image, null] : image;

    const handleRight = () => {
        setIndex(i => Math.min(i + 1, images.length - 1))
    }

    const handleLeft = () => {
        setIndex(i => Math.max(i - 1, 0))
    }

    const atStart = index === 0;
    const atEnd = index === images.length - 1;

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
                    pointer: atStart ? "not-allowed" : "pointer",
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    paddingTop: 5
                }}
            >
                <FaChevronLeft />
            </motion.button>
            <motion.button
                className="unstyledBtn"
                aria-label='Next slide'
                onClick={handleRight}
                disabled={atEnd}
                style={{
                    opacity: atEnd ? 0.4 : 1,
                    pointer: atEnd ? "not-allowed" : "pointer",
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    paddingTop: 5
                }}
            >
                <FaChevronRight />
            </motion.button>
        </div>
    )
}

export default PaintImg