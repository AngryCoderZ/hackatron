// @ts-nocheck
import React, { useEffect } from 'react'

const IsMobile = ({ setIsMobile }) => {
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 900);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setIsMobile]);
    return (<></>)
}

export default IsMobile