import React, { useEffect, useState } from 'react'

export const useScrollPosition = ({threshold = 300}) => {
    const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
        const scrolled = window.scrollY > threshold;
        setShow(scrolled)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])
  return show;
}
