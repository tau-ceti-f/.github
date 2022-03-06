import "../styles/footer.css";
import { Component } from "react";
import { animateScroll } from "react-scroll";

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { showTopButton: false };
        this.onScroll = this.onScroll.bind(this)
    }

    scrollToTop() {
        animateScroll.scrollToTop();
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    onScroll() {
        this.setState({ showTopButton : window.pageYOffset > 50 });
    }

    mailto() {
        window.location.href = "mailto:contact@tau-ceti-f.space";
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-phantom">
                    <span> </span>
                </div>
                <div className="footer-content">
                    <span>Copyright © 2022 tau-ceti-f.space</span>
                    <span className="footer-contact" onClick={this.mailto}>Contact</span>
                    { this.state.showTopButton ? <span className="footer-button" onClick={this.scrollToTop}>Back to top</span> : null }
                </div>
            </div>
        );       
    }
}