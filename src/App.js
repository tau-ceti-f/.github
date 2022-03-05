import "./app.css";
import { useEffect, useRef } from "react";
import { Pages, indexOfSmallest } from "./util";
import { useParams } from "react-router-dom";
import { Header } from "./header";
import { Page } from "./page";
import { Footer } from "./footer";

export const App = () => {
    const pages = Pages.map((x, index) => <Page innerRef={useRef()} key={index+1} text={x} />);
    const { id } = useParams();
    const index = parseInt(id) || 0;
    window.history.replaceState(null, "", "/" + index);

    const onScroll = () => {
        const elements = pages.map(x => x.props.innerRef.current);
        const offsets = elements.map(x => Math.abs(x.getBoundingClientRect().top));
        const index = indexOfSmallest(offsets);
        window.history.replaceState(null, "", "/" + pages[index].key);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll, true);
        if (index > 0) {
            pages[index - 1].ref.current.scrollIntoView()
        }
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