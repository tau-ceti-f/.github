import "../styles/app.css";
import { Component, createRef } from "react";
import { Header } from "./header";
import { Page } from "./page";
import { Footer } from "./footer";
import { animateScroll } from "react-scroll";
import { assets } from "../utility/blockchain";

export class App extends Component {
    constructor(props) {
        super(props);
        this.index = parseInt(props.id) || 0;
        this.pageRefs = assets.map(_ => createRef());
        this.ref = createRef();
        this.onScroll = this.onScroll.bind(this)
        this.onResize = this.onResize.bind(this)
    }

    onScroll() {
        const offsets = this.pageRefs.map(x => x.current.getBoundingClientRect().top);
        let newIndex = offsets.findIndex(x => x >= 0);
        if (newIndex == -1) {
            newIndex = this.pageRefs.length;
        }
        if (this.index != newIndex) {
            window.history.replaceState(null, "", "/#/" + newIndex);
            this.index = newIndex;
        }
    }

    onResize() {
        return; // Disable this cause with the dynamic loading it is buggy
        if (this.index == 0) {
            animateScroll.scrollToTop();
        } else {
            const divOffset = this.ref.current.getBoundingClientRect().top;
            const pageOffset = this.pageRefs[this.index - 1].current.getBoundingClientRect().top;
            const offset = pageOffset - divOffset + 1;
            animateScroll.scrollTo(offset + 1);
        }
    }

    componentDidMount() {
        window.history.replaceState(null, "", "/#/" + this.index);
        window.addEventListener("scroll", this.onScroll, true);
        window.addEventListener("resize", this.onResize, true);
        setTimeout(this.onResize, 100);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("resize", this.onResize);
    }

    render() {
        const pages = assets.map((x, i) => <Page innerRef={this.pageRefs[i]} key={x} id={x} />);
        return (
            <div className="app" ref={this.ref}>
                <Header />
                {pages}
                <p className="continued">To be continued...</p>
                <Footer />
            </div>
        );
    }
}