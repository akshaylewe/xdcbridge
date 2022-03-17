import web3 from './web3';
import Deploy from "../contracts/deployer.json";
import { deployee } from '../common/constant';

const deployerAddress = deployee;
const deploy = new web3.eth.Contract(Deploy.abi, deployerAddress);
export default deploy;