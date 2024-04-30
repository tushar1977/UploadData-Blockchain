const fs = require("fs")
const path = require("path")

export const getTheAbi = () => {
  try {
    const dir = path.resolve(
      __dirname,
      "./artifacts/contracts/Dappazon.sol/Upload.json"
    )
    const file = fs.readFileSync(dir, "utf8")
    const json = JSON.parse(file)
    const abi = json.abi
    console.log(`abi`, abi)

    return abi
  } catch (e) {
    console.log(`e`, e)
  }
}