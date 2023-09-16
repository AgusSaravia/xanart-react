import {React, useEffect, useState } from "react";

const ScrollingDiv = ({text}) => {
    const [scrollY, setScrollY] =  useState(0)
    

    const handleScroll = () =>{
        setScrollY(window.scrollY)
    };

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);

        }
    }, [])

    return(
        <div style={{ position:'relative', transform:`translateY(${scrollY}px)`}}>{text}</div>
    )

}

export default ScrollingDiv;