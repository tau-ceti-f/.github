import "../styles/page.css";
import { Component } from "react";
import { assetMetadata } from "../utility/blockchain";

export class Page extends Component {
    constructor(props) {
        super(props);
        this.size = { width: 0, height: 0 }
        this.state = { title: "", text: "" }
        this.onScroll = this.onScroll.bind(this)
        this.onResize = this.onResize.bind(this)
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll, true);
        window.addEventListener("resize", this.onResize, true);
        setTimeout(this.onResize, 100);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("resize", this.onResize);
    }

    onScroll() {
        const offset = this.props.innerRef.current.getBoundingClientRect().top;
        if (offset < this.size.height && !this.loaded) {
            this.loaded = true;
            assetMetadata(this.props.id).then(x => {
                this.setState({
                    title: x.name,
                    text: x.description
                });
            });
        }
    }

    onResize() {
        this.size = { width: window.innerWidth, height: window.innerHeight }
    }

    render() {
        return (
            <div className="page" ref={this.props.innerRef}>
                <p>{this.state.title}</p>
                <p>{this.state.text}</p>
            </div>
        );
    }
}