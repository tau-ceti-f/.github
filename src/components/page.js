import "../styles/page.css";
import opensea from "../resources/opensea.webp"
import placeholder from "../resources/placeholder.webp"
import { Component } from "react";
import { assetMetadata, assetLink, userLink } from "../utility/blockchain";

export class Page extends Component {
    constructor(props) {
        super(props);
        this.size = { width: 0, height: 0 }
        this.state = { title: "", text: "", image: "", owner: "Elusyve", price: "0.01 ETH" }
        this.onScroll = this.onScroll.bind(this)
        this.onResize = this.onResize.bind(this)
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll, true);
        window.addEventListener("resize", this.onResize, true);
        setTimeout(this.onResize, 100);
        setTimeout(this.onScroll, 100);
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
                <div className="page-header">
                    <div className="page-img"><img src={placeholder} alt={this.state.title} width="100%" /></div>
                    <div className="page-details">
                        <p className="page-stats">
                            Owned by:<br /><a href={userLink(this.state.owner)} target="_blank">{this.state.owner}</a>
                            <br /><br />
                            Current price:<br />{this.state.price}
                        </p>
                        <a className="page-open" href={assetLink(this.props.id)} target="_blank">
                            <img className="page-open-img" src={opensea} alt="Available on OpenSea" />
                        </a>
                    </div>
                </div>
                <p className="page-text">{this.state.title}<br />{this.state.text}</p>
            </div>
        );
    }
}