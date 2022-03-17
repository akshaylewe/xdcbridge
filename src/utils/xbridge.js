import web3 from './xdc3';
import Bridge from "../contracts/bridge.json";
import { xBridgeAddress } from '../common/constant';

//todo contract in env
const bridgeAddress = xBridgeAddress;
const xbridge = new web3.eth.Contract(Bridge.abi, bridgeAddress);


export default xbridge;
