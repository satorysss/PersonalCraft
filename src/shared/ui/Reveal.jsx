import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, threshold = 50 }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const top = ref.current.getBoundingClientRect().top;
            if (top < window.innerHeight - threshold) {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // проверка сразу при рендере

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return (
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
            {children}
        </div>
    );
};

export default Reveal;
