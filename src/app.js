import "./app.css";
import { useEffect, useRef } from "react";
import { Pages } from "./util";
import { Header } from "./header";
import { Page } from "./page";
import { Footer } from "./footer";

export const App = (props) => {
    const pages = Pages.map((x, index) => <Page innerRef={useRef()} key={index+1} text={x} />);
    var index = parseInt(props.id) || 0;

    const onScroll = () => {
        const elements = pages.map(x => x.props.innerRef.current);
        const rects = elements.map(x => x.getBoundingClientRect());
        const offsets = rects.map(x => x.top);
        const newIndex = offsets.findIndex(x => x > 0);
        if (index != newIndex) {
            window.history.replaceState(null, "", "/#/" + newIndex);
            index = newIndex;
        }
    };

    useEffect(() => {
        if (index == 0) {
            window.scrollTo(0, 0);
        } else {
            pages[index - 1].props.innerRef.current.scrollIntoView()
        }
        window.addEventListener("scroll", onScroll, true);
        window.history.replaceState(null, "", "/#/" + index);
        return () => { window.removeEventListener("scroll", onScroll); };
    }, []);

    return (
        <div className="app">
            <Header />
            {pages}
            <Footer />
        </div>
    );
};