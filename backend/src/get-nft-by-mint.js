import { PublicKey } from "@solana/web3.js";
import metaplex from "./metaplex.js";

export async function getNftByMint(mintAddress) {
  return await metaplex.nfts().findByMint({ mintAddress: new PublicKey(mintAddress) });
}
