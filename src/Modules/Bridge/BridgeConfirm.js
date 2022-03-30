
import React, { useState } from "react";


import Header from "../Common/header"
import SideBar from "../Common/drawer";
import Box from '@mui/material/Box';
import { Divider } from "@mui/material";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Progress from "./Progress";
import { useLocation } from "react-router-dom";
import { PregnantWomanSharp } from "@material-ui/icons";
import xdc3 from "../../utils/xdc3";
import Web3 from "web3";
import token from "../../utils/xtoken";
import xbridge from "../../utils/xbridge";
import tokenList from '../../contracts/tokenlist.json'
import Bridge from "../../contracts/bridge.json"
import Deploy from "../../contracts/deployer.json";

import { tokenBridge, tokenDeployee, eBridgeAddress, deployee, xBridgeAddress } from '../../common/constant';
let debridgeId, submissionId, signatures, abc, transactionHash, transactionHashes;
//Main Function
function BridgeConfirm() {
  const [show, setShow] = useState(false);
  const [hash, setHash] = useState("");
  const [hasher, setHasher] = useState("");
  const [chainTo, setChainTo] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();

  const OnSubmit = async (event) => {
    event.preventDefault();
    let account
    //connecting to the xdc testnetwork using chain_id
    await window.web3.eth.getAccounts((err, accounts) => {
      if (err !== null) console.error("");
      else if (accounts.length === 0) {
        account = false;
      } else {
        // console.log("Account",accounts);
        account = true;
      }
    })
      ;

    console.log(" ", location.state.selectedOptionToken.address);
    //creating a object using getAccounts
    const accounts = await xdc3.eth.getAccounts();
    console.log("accounts", accounts[0]);
    console.log(" Destination",'3');
    console.log("", location.state.selectedOptionToken.address);

    /**
     * @dev Performing the Approve method for erc20 .
     * @param address Reciever Address.
     * @param amount token should be approved to the reciever address
     * @param account[0] sender address.
     * @param data passing the approve method wih reciever address and amount
     */

    alert("Sending the Transaction");
    let transaction = {
      from: accounts[0],
      to: location.state.address, //contractAddress of the concerned token (same in data below)
      gas: 28000,

      data: token.methods.approve(location.state.address, xdc3.utils.toWei(location.state.amount, "ether")).encodeABI()
      //value given by user should be multiplied by 1000
    };

    if (51=== 51) {
      await window.web3.eth
        .sendTransaction(transaction)
        .on("confirmation", function (confirmationNumber, receipt) {
          if (receipt && confirmationNumber === 1) {
            console.log("transaction hash ", receipt.transactionHash);
          }
        });
    }
    else {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      const web3 = new Web3(window.ethereum);
      await window.web3.eth
        .sendTransaction(transaction)
        .on("confirmation", function (confirmationNumber, receipt) {
          if (receipt && confirmationNumber === 1) {
            console.log("transaction hash ", receipt.transactionHash);
          }
        });
    }

    await console.log("accounts", accounts[0]);

    await alert("Accepted the Request");

    transaction = {
      from: accounts[0],
      to: xBridgeAddress, //contractAddress of the concerned token (same in data below)
      gas: 150000,
      value: xdc3.utils.toWei(location.state.amount, "ether"), // token _amount
      data: xbridge.methods.send(
        location.state.selectedOptionToken.address,//address _tokenAddress,
        xdc3.utils.toWei(location.state.amount, "ether"), // token _amount
       '3',// _chainIdTo
        location.state.address, //_receiver
        "0x", // _permit
        false, //_useAssetFee
        0, //_referralCode  
        "0x" //_autoParams
      ).encodeABI()
      //value given by user should be multiplied by 1000
    };
    await window.web3.eth
      .sendTransaction(transaction)
      .on("confirmation", function (confirmationNumber, result) {
        if (result && confirmationNumber === 1) {
          transactionHash = result.transactionHash;
        }

      });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "id": transactionHash })
    };
    let var1 = 0;
    while (var1 == 0) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "id": transactionHash })
      };
      await fetch('http://3.109.251.40/', requestOptions)
        .then(response => response.json())
        .then(data => { abc = data });
      console.log(abc.status)
      if (abc.status != 0) {
        var1 = 1;
      }
    };


    console.log("transaction hash", transactionHash);
    alert("Its in Progress");
    alert("Successfully sent the Token");
    console.log(abc);
    debridgeId = abc.debridgeId;
    submissionId = abc.submissionId;
    signatures = abc.signature;
    setHash(transactionHash);
    console.log(submissionId, debridgeId);



    /**
     * @dev To claim the tokens from the sender.
     * @param tokenAddress The address of the token.
     */

    /**
     * @dev switching the network to the ropsten.
     * @param chainid chain id of the ropsten testnet.
     */


    const bridgeAddress = eBridgeAddress;
    /**
    * @dev instance of ebridge, has been instilized because XDCPAY and METAMASK creats only once.
    */
    window.web3 = new Web3(window.ethereum);
    const web3 = new Web3(window.ethereum);
    const ebridge = new web3.eth.Contract(Bridge.abi, bridgeAddress);
    const deployerAddress = deployee;
    /**
    * @dev instance of deploye, has been instilized because XDCPAY and METAMASK creats only once.
    */
    const deploy = new web3.eth.Contract(Deploy.abi, deployerAddress);
    //fetching the address of the sender through metamask

    console.log("", accounts);
    console.log(" Destination",'3');
    const isSubmissionUsed = await ebridge.methods.isSubmissionUsed(submissionId).call();
    const debridge_id = await ebridge.methods.getDebridgeId(location.state.selectedOptionToken.chainId, tokenBridge).call();
    alert("GetDebridgeId successfully fetched");
    console.log("debridgeId", debridge_id);
    console.log(" Destination", location.state.selectedOptionToken.chainId);
    console.log("", location.state.selectedOptionToken.address);
    //deploying the smart contract ERC20
    const deployAsset = await deploy.methods.deployAsset(debridge_id, 'Token Mapped with XDC Chain', 'WXDC1', 18).call();
    const _token = tokenDeployee;
    console.log(deployAsset, _token);

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
    * @param submissionId Submission id contains :- nonce, id , address
    * @param signature to verify the contract
    */
    console.log("", location.state.selectedOptionToken.chainId)

    transaction = {
      from: accounts[0],
      to: eBridgeAddress, //contractAddress of the concerned token (same in data below)
      gas: 280000,
      value: '0',
      data: ebridge.methods.claim(
        debridge_id,
        location.state.amount,
        location.state.selectedOptionToken.chainId,
        location.state.address,
        submissionId,
        signatures,
        autoParamsFrom,
        _token
      ).encodeABI()
      //value given by user should be multiplied by 1000
    };

    if (3 === 51) {
      await window.web3.eth
        .sendTransaction(transaction)
        .on("confirmation", function (confirmationNumber, receipt) {
          if (receipt && confirmationNumber === 1) {
            transactionHashes = receipt.transactionHash;
            console.log("Transaction", transactionHashes)
          }
        });
    }
    else {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      const web3 = new Web3(window.ethereum);
      await window.web3.eth
        .sendTransaction(transaction)
        .on("confirmation", function (confirmationNumber, receipt) {
          if (receipt && confirmationNumber === 1) {
            transactionHashes = receipt.transactionHashes;
            console.log("Transaction", transactionHashes);
          }
        });
    }


    console.log("", submissionId);
    alert("Successfully Recieved the Token");
    setHasher(transactionHashes);
    console.log("Transaction", transactionHashes);


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
  return (
    <>
      <Box>
        <Header />
        <SideBar />
        <div>
          <div className="main-head"> <p>Bridge</p></div>
          <div className="my-card my-card-second">
            <p className="review">Review Transaction</p>
            <Divider className="mb-23" />
            <div className="image-flex">
              <img className="token-img" src="/images/XDC.svg" alt="sachin" ></img>
              <img src="/images/Arrow.svg" alt="sachin"></img>
              <img className="token-img" src="/images/ethereum.svg" alt="sachin"></img>
            </div>
            <div className="asset-flex">
              <p>Asset</p>
              <p className="second-p">{location.state.selectedOptionToken.name}</p>
            </div>
            <Divider className="mb-23" />
            <div className="asset-flex">
              <p>Amount</p>
              <p>{location.state.amount}</p>
              {console.log("njnvd", location.state.amount)}
            </div>
            <Divider className="mb-23" />
            <div className="asset-flex">
              <p>Destination</p>
              <p>{location.state.address}</p>
            </div>
            <Divider className="mb-23" />
            <div className="asset-flex">
              <p>You will get</p>
              <p>{location.state.amount}</p>
            </div>
            <Divider className="mb-23" />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button className="cancel-button">Cancel</button>
              <button className="confirm-button" onClick={OnSubmit}>Confirm</button>
            </div>
          </div>

        </div>
      </Box>
      <Modal show={show} animation={false}>
        <Modal.Header >
          <Progress />
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <div className="done">
          <Button className="done-button" >
            Done
          </Button>
        </div>



      </Modal>
    </>
  );
}

export default BridgeConfirm;