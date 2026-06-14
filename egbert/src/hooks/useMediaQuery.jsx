import React, { useEffect, useState } from 'react'

export const useMediaQuery = (query) => {
const [matches, setMatches] = useState(
    window.matchMedia(query).matches)
    useEffect(() => {
        const media = window.matchMedia(query);
        const handleMedia = (e) => setMatches(e.matches)
        media.addEventListener('change', handleMedia);
        return () => media.removeEventListener('change', handleMedia);
    }, [query])
    return matches
}