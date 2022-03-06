import fetch from "node-fetch";

const contract = "0x2953399124f0cbb46d2cbacd8a89cf0599974963";
const requestOptions = { method: "GET", redirect: "follow" };
const endpoint = "https://polygon-mainnet.g.alchemy.com/v2/8JZJotCyll3izhHySeZDLqDufGJu6UdU/getNFTMetadata";


export const assetMetadata = async (id) => {
    const url = endpoint + "?contractAddress=" + contract + "&tokenId=" + id + "&tokenType=ERC721";
    const response = await fetch(url, requestOptions);
    const json = await response.json();
    return json.metadata;
};

export const collectionStats = async () => {
    const url = "https://api.opensea.io/api/v1/collection/tau-ceti-f";
    const response = await fetch(url, requestOptions);
    const json = await response.json();
    return json.collection.stats;
}

export const openSeaLink = (id) => {
    return "https://opensea.io/assets/matic/" + contract + "/" + id
};

export const assets = [
    "38096592515908936471390429145670091293778445456265336293823658315293854269441",
    "38096592515908936471390429145670091293778445456265336293823658316393365897217",
    "38096592515908936471390429145670091293778445456265336293823658317492877524993",
    "38096592515908936471390429145670091293778445456265336293823658318592389152769",
    "38096592515908936471390429145670091293778445456265336293823658319691900780545",
    "38096592515908936471390429145670091293778445456265336293823658320791412408321",
    "38096592515908936471390429145670091293778445456265336293823658321890924036097"
];

