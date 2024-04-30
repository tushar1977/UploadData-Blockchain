import json
from web3 import Web3

ID = 1
LEVEL = 2
POINTS = 2
ACHIEVEMENT = [1, 2, 3]

abi = json.loads('[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"add_data","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"points","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getUploadedData","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"points","type":"uint256"},{"internalType":"uint256[]","name":"achievement","type":"uint256[]"}],"internalType":"struct Upload.data","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_level","type":"uint256"},{"internalType":"uint256","name":"_points","type":"uint256"},{"internalType":"uint256[]","name":"_achievement","type":"uint256[]"}],"name":"upload_data","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
end_pt = "HTTP://127.0.0.1:7545"
address = "0xa164c62F4D57d3f17d50A9A9b87c0cB331a513A8"

web3 = Web3(Web3.HTTPProvider(end_pt))

contract = web3.eth.contract(address=address, abi=abi)
tx = contract.functions.upload_data(ID, LEVEL, POINTS, ACHIEVEMENT).transact()
web3.eth.wait_for_transaction_receipt(tx)

print("data is :- {}".format(contract.functions.getUploadedData(ID).call()))