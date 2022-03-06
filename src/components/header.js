import "../styles/header.css";
import logo from "../resources/logo.png";
import signature from "../resources/signature.png";

export const Header = () => {

    return (
        <div className="header">
            <img className="header-img" src={logo} alt="Logo" width="20%" />
            <p className="header-text">
                Tau Ceti f is the very first book that has been published on a blockchain. 
                Why you might ask? 
                I wanted to make the book accessible for everyone while still allowing people to support my efforts if they wanted to. 
                I figured donate buttons are lame and don't work so why not give people the chance to own a page of the book instead of owning a copy? 
                Publishing the book on a blockchain has the added benefit that it will live forever and can never be altered. 
                I feel like this will come back to bite me at some point but I am willing to take that risk (⌐■_■).
                All the pages and illustrations are frozen in the <a href="https://ipfs.io">InterPlanetary Filling System (IPFS)</a>, 
                a distributed peer-to-peer file sharing service, 
                and stored on the <a href="https://polygon.technology">Polygon blockchain</a>.
                All pages are are available for purchase on the <a href="https://opensea.io/collection/tau-ceti-f">OpenSea NFT marketplace</a>.
                I hope you enjoy reading Tau Ceti f and if you do please consider purchasing one of the pages through <a href="https://opensea.io/collection/tau-ceti-f">OpenSea</a>. 
                Even if I do not own the page itself anymore I will still benefit from your purchase through royalties.
                That being said. I hope you enjoy reading Tau Ceti f!
                <br />
                <br />
                Yours truly,
                <br />
                <br />
                <img className="header-signature" src={signature} alt="Elusyve" />
            </p>
        </div>
    );
}