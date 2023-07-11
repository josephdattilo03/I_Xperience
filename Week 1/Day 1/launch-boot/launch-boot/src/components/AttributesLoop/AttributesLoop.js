
import React from "react";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import "./AttributesLoop.css"

const AttributesLoop = () => {
        const textRef = useRef(null);
        useEffect(() => {
            const options = {
            strings: ['Developer', 'Musician', 'Student', 'Nerd'],
            typeSpeed: 200,
            backSpeed: 30,
            loop: true,
            showCursor: false,
            startDelay: 2700
            };
            const typed = new Typed(textRef.current, options);
        
            return () => {
                typed.destroy();
            };
        }, []);

        return <span id="typed-text" ref={textRef}></span>;
    };


export default AttributesLoop