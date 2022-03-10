import "../styles/header.css";
import logo from "../resources/logo.webp";
import signature from "../resources/signature.webp";
import { Component } from "react";
import { collectionStats, userLink } from "../utility/blockchain";

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { items: 0, owners: 0, price: 0, traded: 0 };
    }

    componentDidMount() {
        collectionStats().then(x => {
            this.setState({
                items: x.count,
                owners: x.num_owners,
                price: x.floor_price,
                traded: x.total_volume
            });
        });
    }

    render() {
        return (
            <div className="header">
                <img className="header-img" src={logo} alt="Logo" width="20%" />
                <p className="header-text">
                    Tau Ceti f is the very first book that has ever been published on a blockchain. 
                    Why you might ask? 
                    I wanted to make the book accessible for everyone while still allowing people to support my efforts if they wanted to. 
                    I figured donate buttons are lame and don't work so why not give people the chance to own a page of the book instead of owning a copy? 
                    Publishing the book on a blockchain has the added benefit that it will live forever and can never be altered. 
                    I feel like this will come back to bite me at some point but I am willing to take that risk (⌐■_■).
                    All the pages and illustrations are frozen in the <a href="https://ipfs.io" target="_blank">InterPlanetary Filling System (IPFS)</a>, 
                    a distributed peer-to-peer data sharing service, 
                    and stored on the <a href="https://polygon.technology" target="_blank">Polygon blockchain</a>.
                    All pages are are available for purchase on the <a href="https://opensea.io/collection/tau-ceti-f" target="_blank">OpenSea NFT marketplace</a>.
                    I hope you enjoy reading Tau Ceti f and if you do please consider purchasing one of the pages through <a href="https://opensea.io/collection/tau-ceti-f" target="_blank">OpenSea</a>. 
                    Even if I do not own the page itself anymore I will still benefit from your purchase through royalties.
                    That being said. I hope you enjoy reading Tau Ceti f!
                    <br />
                    <br />
                    Yours truly,
                    <br />
                    <br />
                    <a href={userLink("Elusyve")} target="_blank"><img className="header-signature" src={signature} alt="Elusyve" /></a>
                </p>
                <a className="header-stats" href="https://opensea.io/collection/tau-ceti-f" target="_blank">
                    <span>{this.state.items}<br />pages</span>
                    <span>{this.state.owners}<br />owners</span>
                    <span>{this.state.price} ETH<br />floor price</span>
                    <span>{this.state.traded} ETH<br />volume traded</span>
                    <div></div>
                </a>
            </div>
        );
    }
}