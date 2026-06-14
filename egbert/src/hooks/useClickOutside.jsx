import React, { useEffect } from 'react'

export const useClickOutside = (refs, handler) => {
  useEffect(() => {
    const listener = (event) => {
        for(const ref of refs) {
            if (ref.current && ref.current.contains(event.target)) {
                return
            }
        }
        handler(event)
    }
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener)
  }, [refs, handler])
}
