// write your NFT miner here
import {Address, TonClient} from "ton"
import {getHttpEndpoint} from "@orbs-network/ton-access";


async function main () {

  const wallet = Address.parse('0QAK-eku1yCNkL5wt7g9OlBpHSnjadN10h_A19uM3SGVJDA8');
  const collection = Address.parse('EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX');

}

const endpoint = await getHttpEndpoint({
    network: "testnet",
  });

  // initialize ton library
  const client = new TonClient({ endpoint });

main()

