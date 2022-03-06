import "./footer.css";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

export const Footer = () => {
    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };
    const [showTopButton, setShowTopButton] = useState(false);

    const onScroll = () => {
        if (window.pageYOffset > 50) {
            setShowTopButton(true);
        } else {
            setShowTopButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll, true);
        return () => { window.removeEventListener("scroll", onScroll); };
    }, []);

    return (
        <div className="footer">
            <div className="footer-phantom">
                <span> </span>
            </div>
            <div className="footer-content">
                <span>Copyright © 2022 tau-ceti-f.space</span>
                { showTopButton ? <span className="footer-button" onClick={scrollToTop}>Back to top</span> : null }
            </div>
        </div>
    );
}