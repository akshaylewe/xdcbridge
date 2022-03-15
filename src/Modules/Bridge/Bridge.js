import exchange from "../../assets/exchange.png";
import ethereum from "../../assets/ethereum.svg";
import copy from "../../assets/copy.png";
import max from "../../assets/max.png";
import "./FormMain.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Select from "react-select";
import xdc3 from "../../utils/xdc3";
import web3 from "../../utils/web3";
import token from "../../utils/xtoken";
import xbridge from "../../utils/xbridge";
import ebridge from '../../utils/ebridge';
import deploy from '../../utils/deploy';
import tokenList from '../../contracts/tokenlist.json'
import { tokenAddress, tokenBridge, tokenDeployee } from '../../common/constant';

let debridgeId, submissionId;


function BridgeCard() {
  const [submissionId, setSubmissionId] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [hash, setHash] = useState("");
  const [hasher, setHasher] = useState("");
  const [chainTo , setChainTo] = useState("");

  const OnSubmit = async (event) => {
    event.preventDefault();

    //connecting to the xdc testnetwork using chain_id
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x33' }],
    });


    console.log (" ", selectedOptionToken.address);

    //creating a object using getAccounts
    const accounts = await xdc3.eth.getAccounts();
    console.log("accounts", accounts[0]);
    console.log (" Destination", selectedOptionDestination.value);
      /**
     * @dev Performing the Approve method for erc20 .
     * @param address Reciever Address.
     * @param amount token should be approved to the reciever address
     * @param account[0] sender address.
     */
    await token.methods.approve(address, xdc3.utils.toWei(amount, "ether")).send({ from: accounts[0] });
    let result = await xbridge.methods.send(
      selectedOptionToken.address ,//address _tokenAddress,
      xdc3.utils.toWei(amount, "ether"), // token _amount
      selectedOptionDestination.value,// _chainIdTo
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
    console.log (" Destination", selectedOptionDestination.value);
    const isSubmissionUsed = await ebridge.methods.isSubmissionUsed(submissionId).call();
    const debridge_id = await ebridge.methods.getDebridgeId(selectedOptionToken.chainId, tokenBridge).call();
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
      selectedOptionDestination.value,
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



  const data = [
    {
      value: 3,
      text: "Ropthen",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="28px"
          height="28px"
        >
          <path
            fill="#4caf50"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          />
          <path fill="#fff" d="M21,14h6v20h-6V14z" />
          <path fill="#fff" d="M14,21h20v6H14V21z" />
        </svg>
      ),
    },
    {
      value: 51,
      text: "XDC",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>
      ),
    },
  ];

  const dataDestination = [
    {
      value: 51,
      text: "XDC",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="28px"
          height="28px"
        >
          <path
            fill="#4caf50"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          />
          <path fill="#fff" d="M21,14h6v20h-6V14z" />
          <path fill="#fff" d="M14,21h20v6H14V21z" />
        </svg>
      ),
    },
    {
      value: 3,
      text: "Ropthen",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>
      ),
    },
  ];



  const [selectedOptionToken, setSelectedOptionToken] = useState(null);

  // handle onChange event of the dropdown
  const handleChangeToken = (e) => {
    setSelectedOptionToken(e);
  };


  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const [selectedOptionDestination, setSelectedOptionDestination] = useState(null);

  // handle onChange event of the dropdown
  const handleChangeDestination = (e) => {
    setSelectedOptionDestination(e);
  };
  return (
    <div>
      <form>
        <div className="parent-row">
          <div className="fl ">
            <div className="  c-b pt-3  left-label ">Source</div>
            {/* <div className="block-chain-container"> */}
            {/* <div>
                <img src={ethereum} height="35px" />
              </div> */}
            {/* <div className="block-chain-right "> */}
            {/* <select className="input-box-1 fs-12 fw-b rm-border">
                  <option style={{ color: "#707070" }}>Select Category</option>

                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select> */}

            <Select
              isSearchable={false}
              isClearable={false}
              className="alignLeft input-box-1  fs-12 rm-border "
              placeholder="Select Option"
              value={selectedOption}
              options={data}
              onChange={handleChange}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {e.icon}
                  <span style={{ marginLeft: 5, color: "black" }}>
                    {e.text}
                  </span>
                </div>
              )}
            />

            {/* {selectedOption && (
                  <div style={{ marginTop: 20, lineHeight: "25px" }}>
                    <b>Selected Option:</b> {selectedOption.value}
                  </div>
                )} */}
            {/* </div> */}
            {/* </div> */}
          </div>

          <img className="exchane-img fl-img" src={exchange} />

          <div className="fl">
            <div className="  c-b pt-3  left-label">Destination</div>
            <Select
              isSearchable={false}
              isClearable={false}
              className="alignLeft input-box-1 fs-12  rm-border"
              placeholder="Select Option"
              value={selectedOptionDestination}
              options={dataDestination}
              onChange={handleChangeDestination}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {e.icon}
                  <span style={{ marginLeft: 5, color: "black" }}>
                    {e.text}
                  </span>
                </div>
              )}
            />
            {/* <div className="block-chain-container">
              <div>
                <img src={ethereum} height="35px" />
              </div>
              <div className="block-chain-right ">
                <select className="input-box-1 fs-12 fw-b rm-border">
                  <option style={{ color: "#707070" }}>Select Category</option>

                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div> */}
          </div>
        </div>
        <div>
          <div className="  c-b pt-3    left-label ">Select Token*</div>
          <Select
            isSearchable={false}
            isClearable={false}
            className="alignLeft drop-padding token-select fs-12  rm-border"
            placeholder="Select Option"
            value={selectedOptionToken}
            options={tokenList.tokens}
            onChange={handleChangeToken}
            getOptionLabel={(e) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                {e.symbol}
                <span style={{ marginLeft: 5, color: "black" }}>{e.address}</span>
              </div>
            )}
          />
          {/* <div className="block-chain-container">
            <div>
              <img src={ethereum} height="35px" />
            </div>
            <div className="block-chain-right ">
              <select className="input-box-1 rm-border fs-12 fw-b">
                <option value="">Select Category</option>
                <option selected value="Ethereum">
                  Select Token
                </option>
              </select>
            </div>
          </div> */}
        </div>
        <div className="hint-label fs-10  c-b ">
          Copy XETH Token Address
          <Link className="copy-link" to="#">
            <div className="copy-token">
              <img src={copy} height="12px" />
              <div>XDC Network</div>
            </div>
          </Link>
          <Link className="copy-link" to="#">
            <div className="copy-token">
              <img src={copy} height="12px" />
              <div>Ethereum</div>
            </div>
          </Link>
        </div>
        <div className="  c-b pt-3  left-label">Amount*</div>
        <div className="amount-box-outer fs-12 fw-b">
          <input
            type="number"
            name="amount"
            className="amount-box-inner fs-12  rm-border-amount"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
          />
          <Link to="#">
            <img src={max} height="20px" />
          </Link>
        </div>

        <div className="  c-b pt-3  left-label">Destination Address*</div>
        <div className="destination">
          <input
            type="name"
            name="amount"
            className="input-box-1 fs-12  "
            placeholder="Wallet Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button type="submit" onClick={OnSubmit} className="submit-button">
          Send Amount
        </button>
        <a  href={'https://explorer.apothem.network/txs/'+hash} target='_blank' style={{ color: "black", fontSize: "9px" }}> {hash} </a>
        <button  onClick={onClick} type="submit" className="submit-button">
          Recieve
        </button>
        <a  href={'https://ropsten.etherscan.io/tx/'+hasher} target='_blank' style={{ color: "white", fontSize: "9px" }}> {hasher} </a>
      </form>
    </div>
  );
}

export default BridgeCard;
