import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, threshold = 0 }) => {
    const refModal = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!refModal.current) return;
            const top = refModal.current.getBoundingClientRect().top;
            if (top < window.innerHeight - threshold) {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // проверка сразу при рендере

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return (
        <div ref={refModal} className={`revealModal ${visible ? "visible" : ""}`}>
            {children}
        </div>
    );
};

export default Reveal;
