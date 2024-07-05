import React from 'react';
import {
  BackgroundImage,
  TopBar,
} from '../components';

import { useWallet } from '@solana/wallet-adapter-react';


const Faucet = () => {
	const { publicKey } = useWallet();

	return (
	<BackgroundImage>
		<TopBar currentPage='Voltio Faucet'/>
		{
			!publicKey
				?
					<h1>Connect to a wallet pls :&#40;</h1>
				:
					<div className="bg-[#1e1e1e] p-10 rounded-[50px] mt-10">
						<form>
							<div className="mb-4">
								<input
								type="text"
								className="w-full px-4 py-2 text-black rounded"
								placeholder="Number"
								/>
							</div>
							<div>
								<button
									type="submit"
									className="w-full px-4 py-2 text-white bg-blue-500 rounded"
									>
									Submit
								</button>
							</div>
						</form>
					</div>
		}
		
	  </BackgroundImage>

	);
  }


export default Faucet;