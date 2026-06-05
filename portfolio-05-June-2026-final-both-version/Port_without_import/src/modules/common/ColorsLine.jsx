import { useEffect, useRef } from "react";
export default function ColorsLine(){
    const colorsLineHeightRef = useRef(null);
    useEffect(() => {
        const setHeight = () => {
        if (colorsLineHeightRef.current) {
            const height = colorsLineHeightRef.current.offsetHeight;
            document.documentElement.style.setProperty("--colorsLineHeight", `${height}px`);
        }
        };
        setHeight();
        window.addEventListener("resize", setHeight);
        return () => window.removeEventListener("resize", setHeight);
    }, []);
    return(
        <>
            <ul ref={colorsLineHeightRef} className="colorsLine">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}