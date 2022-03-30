import React, { useEffect, useState } from 'react';
import {
	useAddress,
	useMetamask,
	useNFTCollection,
	useSigner,
} from '@thirdweb-dev/react';
import {
	NetworkOrSignerOrProvider,
	NFTCollection,
	NFTContractDeployMetadata,
	ThirdwebSDK,
} from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';

const style = {
	container: 'flex justify-center text-center h-screen bg-white pt-96',
	text: 'inline-block align-middle text-5xl',
};

const Create = () => {
	const address = useAddress();

	const [formInput, setFormInput] = useState<NFTContractDeployMetadata>({
		name: '',
		symbol: '',
		description: '',
		primary_sale_recipient: '0x0',
	});

	const signer: any = useSigner();
	const sdk = new ThirdwebSDK(signer);

	// Get connected Wallet from Thirdweb SDK
	useEffect(() => {
		if (!address) {
			console.log('Connected wallet: none');
			return;
		}
		console.log('Connected wallet: ', address);
		setFormInput({ ...formInput, primary_sale_recipient: address });
	}, [address]);

	const createCollection = async () => {
		console.log(sdk);
		const collection: String = await sdk.deployer.deployNFTCollection(
			formInput
		);
		console.log(collection);
		console.log(formInput);
	};

	// Create Collection on Smart Contracts or Thirdweb

	// Add NFT to the Collection

	return (
		<div className={style.container}>
			<div className='flex w-1/2 flex-col align-middle'>
				<h2 className='text-left mt-4 font-bold'>Name</h2>
				<input
					className='border rounded p-4 mb-4'
					placeholder='asset name'
					onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
				/>
				<h2 className='text-left mt-4 font-bold'>Symbol</h2>
				<input
					className='border rounded p-4 mb-4'
					placeholder='asset symbol'
					onChange={(e) =>
						setFormInput({ ...formInput, symbol: e.target.value })
					}
				/>
				<h2 className='text-left mt-4 font-bold'>Description</h2>
				<textarea
					className='border rounded mb-4 p-4'
					placeholder='asset description'
					onChange={(e) =>
						setFormInput({ ...formInput, description: e.target.value })
					}
				/>
				<button
					className='inline-flex justify-center w-60 px-4 py-2 font-medium text-[#F7F7FF] bg-[#FE5F55] rounded-md  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
					onClick={() => {
						createCollection();
					}}
				>
					Create NFT Collection
				</button>
			</div>
		</div>
	);
};

export default Create;

//ContractDeployer.(network, options, storage)

// metadata = {
//  description: string,
//  external_link: string,
//  fee_recipient: string
//  image: FileBufferOrString
//  name: string
//  platform_fee_basis_points?: number (should this be 2.5?)
//  platform_fee_receipent?: string (receives platform fees)
//  primary_sale_recipient: string (address that gets proceeds from primary sales)
//  seller_fee_basis_points?: number (royalties from secondary market)
//  symbol?: string (symbol for NFTs, e.g. BAYC)
//  trusted_forwarders?: string[] (addresses for gasless trusted forwarding)
// }

// NFTCollection = await ContractDeployer.deployNFTCollection(metadata)
