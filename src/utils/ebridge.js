import web3 from './web3';
import Bridge from "../contracts/bridge.json";
import { wBridgeAddress } from '../common/constant';

const bridgeAddress = wBridgeAddress;
const ebridge = new web3.eth.Contract(Bridge.abi, bridgeAddress);

export default ebridge;
