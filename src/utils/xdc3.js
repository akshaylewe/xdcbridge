import XDC3 from "xdc3";
import Web3 from "web3"
// window.ethereum.request({ method: "eth_requestAccounts" });
window.web3 = new Web3(window.xdc );

const xdc3 = new XDC3(window.xdc)

export default xdc3;