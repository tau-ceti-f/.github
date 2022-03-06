import "./app.css";
import { useEffect, useRef } from "react";
import { Pages } from "./util";
import { Header } from "./header";
import { Page } from "./page";
import { Footer } from "./footer";
import { animateScroll } from "react-scroll";

export const App = (props) => {
    const pages = Pages.map((x, index) => <Page innerRef={useRef()} key={index+1} text={x} />);
    var index = parseInt(props.id) || 0;
    var ref = useRef();

    const onScroll = () => {
        const offsets = pages.map(x => x.props.innerRef.current.getBoundingClientRect().top);
        const newIndex = offsets.findIndex(x => x >= 0);
        if (index != newIndex) {
            window.history.replaceState(null, "", "/#/" + newIndex);
            index = newIndex;
        }
    };

    useEffect(() => {
        if (index == 0) {
            animateScroll.scrollToTop();
        } else {
            const divOffset = ref.current.getBoundingClientRect().top;
            const pageOffset = pages[index - 1].props.innerRef.current.getBoundingClientRect().top;
            const offset = pageOffset - divOffset + 1;
            animateScroll.scrollTo(offset);
        }
        window.addEventListener("scroll", onScroll, true);
        window.history.replaceState(null, "", "/#/" + index);
        return () => { window.removeEventListener("scroll", onScroll); };
    }, []);

    return (
        <div className="app" ref={ref}>
            <Header />
            {pages}
            <Footer />
        </div>
    );
};