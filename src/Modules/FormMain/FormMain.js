//importing the libraries
import React, { useState } from 'react';
import exchange from "../../assets/exchange.png";
import ethereum_img from "../../assets/ethereum.svg";
import { toast } from "react-toastify";
import xdc3 from "../../utils/xdc3";
import web3 from "../../utils/web3";
import token from "../../utils/xtoken";
import xbridge from "../../utils/xbridge";
import ebridge from '../../utils/ebridge';
import deploy from '../../utils/deploy';
import "./FormMain.css";
import { tokenAddress, tokenBridge, tokenDeployee } from '../../common/constant';

// defining the variable for fetching the submission id
let debridgeId, submissionId;

    /**
     * @dev Main function fetching the submission id 
     * Performing the transaction between  2 testnetworks using bridge
     */
function FormMain() {
  const [submissionId, setSubmissionId] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [hash, setHash] = useState("");
  const [hasher, setHasher] = useState("");
  const [chainTo , setChainTo] = useState("");


      /**
     * @dev Checking the whether wallet is been connected or not.
     * @param accounts fetching the account address from the metamask.
     */
  web3.eth.getAccounts(function (err, accounts) {
    if (err != null) console.error("An error occurred: " + err);
    else if (accounts.length == 0) setButtonText("Connect Wallet");
    else setButtonText("Send Amount");
  });




    /**
     * @dev sending the tokens to the other test network.
     * @param account[0] fetching the address from the metamask.
     * @returns submission id and hash value
     */
 const OnSubmit = async (event) => {
    event.preventDefault();

    //connecting to the xdc testnetwork using chain_id
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x33' }],
    });

    //creating a object using getAccounts
    const accounts = await xdc3.eth.getAccounts();
    console.log("accounts", accounts[0]);
    console.log (" ", chainTo);
      /**
     * @dev Performing the Approve method for erc20 .
     * @param address Reciever Address.
     * @param amount token should be approved to the reciever address
     * @param account[0] sender address.
     */
    await token.methods.approve(address, xdc3.utils.toWei(amount, "ether")).send({ from: accounts[0] });
    let result = await xbridge.methods.send(
      tokenAddress,//address _tokenAddress,
      xdc3.utils.toWei(amount, "ether"), // token _amount
      chainTo,// _chainIdTo
      address, //_receiver
      "0x", // _permit
      false, //_useAssetFee
      0, //_referralCode
      "0x" //_autoParams
    ).send({ //sending the tokens to the reciever
      from: accounts[0], //Sender Address
      value: xdc3.utils.toWei(amount, "ether"), //Amount
    });
    alert("Successfully sent the Token");
    setSubmissionId(result.events.Sent.returnValues[0]);
    const debridgeId = result.events.Sent.returnValues[1];
    setHash(result.transactionHash);
    console.log(submissionId, debridgeId);
  };
  console.log (" ", tokenAddress);


    /**
     * @dev To claim the tokens from the sender.
     * @param tokenAddress The address of the token.
     */
  const onClick = async (event) => {
    event.preventDefault();
    
    /**
     * @dev switching the network to the ropthen.
     * @param chainid chain id of the ropthen testnet.
     */
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x3' }],
    });

    console.log(submissionId, debridgeId);
//todo if condition
    //fetching the address of the sender through metamask
    const accounts = await web3.eth.getAccounts();
    console.log("", accounts);
    const isSubmissionUsed = await ebridge.methods.isSubmissionUsed(submissionId).call();
    const debridge_id = await ebridge.methods.getDebridgeId(chainTo, tokenBridge).call();
    alert("GetDebridgeId successfully fetched");
    console.log("debridgeId", debridge_id);

    //deploying the smart contract ERC20
    const deployAsset = await deploy.methods.deployAsset(debridge_id, 'Token Mapped with XDC Chain', 'WXDC1', 18).call();
    const _token = tokenDeployee;
    console.log(debridge_id, deployAsset, isSubmissionUsed, _token);

        /**
     * @dev Get the hash value and the result.
     * @param web3 fetching the web3 from the library.
     */
    const autoParamsFrom = await _packSubmissionAutoParamsFrom(web3, '0x');

    /**
     * @dev Performing the ERC20 claim function.
    * @param debridge_id The address of the token.
    * @param amount Token should be claim from the reciever
    * @param chain_id To chain ID
    * @param address To Address
    * @param 0x Prefix
    */

    //todo chain id in .env file
    let result = await ebridge.methods.claim(
      debridge_id,
      amount,
      chainTo,
      address,
      submissionId,
      '0x',
      autoParamsFrom,
      _token
    ).send({
      from: accounts[0],
      value: '0',
    });
    console.log("", submissionId);
    alert("Successfully Recieved the Token");
    setHasher(result.transactionHash);

    /**
     *@dev Retrning the hash.
    * @param web3 Librabry.
    * @param autoParams autoparam
    * @returns return the successfull hash value
    */
     async function _packSubmissionAutoParamsFrom(web3, autoParams) {
      if (autoParams !== '0x' && autoParams !== '') {
          const decoded = web3.eth.abi.decodeParameters(
              ['tuple(uint256,uint256, bytes, bytes)'], autoParams
          );
          const encoded = web3.eth.abi.encodeParameter(
              'tuple(uint256,uint256, address, bytes, bytes)',
              [decoded[0][0], decoded[0][1], decoded[0][2], decoded[0][3]]
          );
          return encoded;
      }
      return '0x';
    }
    
    };

  //Connecting to the metamask
  function abc() {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          // accountChangeHandler(result[0]); //accounts can be a array we just wanna grab first one
          console.log(result[0]);
          // window.location.pathname = "/wallet";
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Install Metamask");
      // setErrorMssg("Install Metamask");
      toast.success("Connect Wallet");
    }
  }

// const changeOption = (e)=>{
//  if(e.target.value === "XDC")
//  {
//   window.ethereum.request({
//     method: 'wallet_switchEthereumChain',
//     params: [{ chainId: '0x33' }],
    
//   });
//   const accounts =  xdc3.eth.getAccounts();
//   alert();
// }
 
// }



  return (
    <div>
      <form>
        <div className="parent-row">
          <div className="fl">
            <div className="fs-12  c-b pt-3  left-label">Source</div>
            {/* <Link>Create</Link> */}
            <div className="block-chain-container">
              <div>
                <img src={ethereum_img} height="35px" />
              </div>
              <div className="block-chain-right ">
                <select   className="input-box-1 fs-12 fw-b rm-border">
                  <option style={{ color: "#707070" }}>Select Category</option>
                  {/* onChange={changeOption} */}
                  <option  >XDC</option>
                  <option >Ropsten</option>

                </select>
              </div>
            </div>
          </div>

          <img className="exchane-img fl-img" src={exchange} />

          <div className="fl">
            <div className="fs-12  c-b pt-3  left-label">Destination</div>
            {/* <Link>Create</Link> */}
            <div className="block-chain-container">
              <div>
                <img src={ethereum_img} height="35px" />
              </div>
              <div className="block-chain-right ">
                <select onChange={(e) => setChainTo(e.target.value)}  className="input-box-1 fs-12 fw-b rm-border">
                  <option style={{ color: "#707070" }}> Select Category</option>

                  <option value={3} >Ropsten</option>
                  <option value={51}>XDC</option>
                   </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="fs-12  c-b pt-3    left-label ">Select Token*</div>
          <div className="block-chain-container">
            <div>
              <img src={ethereum_img} height="35px" />
            </div>
            <div className="block-chain-right ">
              <select className="input-box-1 rm-border fs-12 fw-b">
                <option value="">Select Category</option>
                <option selected value="Ethereum">
                  Select Token
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="hint-label fs-10  c-b ">Copy XETH Token Address </div>
        <div className="fs-12  c-b pt-3  left-label">Amount*</div>
        <div>
          <input
            type="text"
            className="input-box-1 fs-12 fw-b"
            placeholder="0"
            onChange={(e) => setAmount(e.target.value)}

          />
        </div>

        <div className="fs-12  c-b pt-3  left-label">Destination Address*</div>
        <div>
          <input
            // value={this.state.toAddress}
            // onChange={(event) => this.setState({ value: event.target.toAddress })}
            type="name"
            className="input-box-1 fs-12 fw-b"
            placeholder="Wallet Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" onClick={OnSubmit} className="submit-button">
          {buttonText}
        </button>
        <a  href={'https://explorer.apothem.network/txs/'+hash} target='_blank' style={{ color: "black", fontSize: "9px" }}> {hash} </a>
        <button type="submit" onClick={onClick} className="submit-button"> Recieve</button>
        <a  href={'https://ropsten.etherscan.io/tx/'+hasher} target='_blank' style={{ color: "black", fontSize: "9px" }}> {hasher} </a>
      </form>
    </div>
  );
}

export default FormMain;
