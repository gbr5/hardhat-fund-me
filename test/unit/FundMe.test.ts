import { deployments, ethers, getNamedAccounts } from "hardhat"
import { FundMe, MockV3Aggregator } from "../../typechain-types"
import { assert } from "chai"

// !!
//
// Stopped at 11:14:00
// https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=3322s
//
// I'm gonna try to remake the project using from the start ethers v5
//
// Aftwerwards I can try to remove libraries:
// - hardhat-deploy
// - hardhat-deploy-ethers
//
// !!

describe("FundMe", async function () {
  let fundMe: FundMe
  let deployer
  let mockV3Aggregator: MockV3Aggregator

  beforeEach(async function () {
    deployer = (await getNamedAccounts()).deployer
    const signer = await ethers.provider.getSigner()
    const contracts = await deployments.fixture(["all"])

    const fundMeAddress = contracts["FundMe"].address
    const fundMeABI = contracts["FundMe"].abi

    fundMe = (await ethers.getContractAt(
      "FundMe",
      fundMeAddress,
      signer
    )) as unknown as FundMe
    console.log(`FundMe: ${fundMe}`)
    mockV3Aggregator = (await ethers.getContractAt(
      "mockV3Aggregator",
      contracts["MockV3Aggregator"].address,
      signer
    )) as unknown as MockV3Aggregator
  })

  describe("constructor", async function () {
    it("Sets the aggregator addresses correctly", async function () {
      const response = await fundMe.getPriceFeed()
      const mockV3AggregatorAddress = await mockV3Aggregator.getAddress()
      assert.equal(response, mockV3AggregatorAddress)
    })
  })
})
