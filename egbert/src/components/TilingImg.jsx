import { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const TilingImg = () => {
    const [index, setIndex] = useState(0);

    const images = [4, 5, 6];

    const handleRight = () => {
        setIndex(prev => (prev + 1) % images.length)
    }

    const handleLeft = () => {
        setIndex(prev => (prev - 1 + images.length) % images.length)
    }

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            background: 'white',
            border: '2px solid #fff',
        }}>
            <h1>{images[index]}</h1>
            <button
                className='unstyledBtn'
                aria-label='Previous slide'
                onClick={handleLeft}
                style={{
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    paddingTop: 5
                }}
            >
                <FaChevronLeft />
            </button>
            <button
                className='unstyledBtn'
                aria-label='Next slide'
                onClick={handleRight}
                style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    paddingTop: 5
                }}
            >
                <FaChevronRight />
            </button>
        </div>
    )
}

export default TilingImg