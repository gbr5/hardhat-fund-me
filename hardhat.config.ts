import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import * as dotenv from "dotenv"

dotenv.config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL! || "https://eth-sepolia"
const PRIVATE_KEY = process.env.PRIVATE_KEY! || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY! || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY! || "key"

const config: HardhatUserConfig = {
  solidity: "0.8.18",
}

export default config
