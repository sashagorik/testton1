// write your NFT miner here
import {Address, TonClient} from "ton"
import {getHttpEndpoint} from "@orbs-network/ton-access";


async function main () {

  const wallet = Address.parse('YOUR_WALLET_ADDRESS');
  const collection = Address.parse('COLLECTION_ADDRESS');

}

const endpoint = await getHttpEndpoint({
    network: "testnet",
  });

  // initialize ton library
  const client = new TonClient({ endpoint });

main()

