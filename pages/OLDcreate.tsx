import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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

import Dropzone from '../components/Create/Dropzone';

const style = {
	container: 'flex justify-center text-center bg-white pt-20 pb-40',
	text: 'inline-block align-middle text-5xl',
};

const Create = () => {
	const address = useAddress();
	const [file, setFile] = useState(null);
	const router = useRouter();

	const handleChange = (file: any) => {
		setFile(file);
	};

	const fileTypes = ['JPG', 'PNG', 'GIF'];

	// Metadata for the NFTCollection
	const [nftCollectionMetadata, setNftCollectionMetadata] =
		useState<NFTContractDeployMetadata>({
			name: '',
			symbol: '',
			description: '',
			primary_sale_recipient: '0x0',
		});

	// Metadata for the NFT
	const [nftMetadata, setNftMetadata] = useState<any>({
		name: '',
		description: '',
		image: '',
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
		setNftCollectionMetadata({
			...nftCollectionMetadata,
			primary_sale_recipient: address,
		});
	}, [address]);

	// Create Collection on Smart Contracts or Thirdweb
	const createCollection = async () => {
		console.log('Creating Collection...');
		const collection: string = await sdk.deployer.deployNFTCollection(
			nftCollectionMetadata
		);
		console.log('NFTCollection created at :', collection);
		createNFT(collection);
	};

	// Add NFT to the Collection
	const createNFT = async (collection: string) => {
		console.log('Creating NFT in', collection);
		const contract = sdk.getNFTCollection(collection);
		const tx = await contract.mint(nftMetadata);
		console.log('Created NFT in tx:', tx);
	};

	return (
		<div className={style.container}>
			<div className='flex w-1/2 flex-col align-middle'>
				<Dropzone />
				<h2 className='text-left mt-4 font-bold'>NFT Name</h2>
				<input
					className='border rounded-lg p-4 mb-4'
					placeholder='asset name'
					onChange={(e) =>
						setNftMetadata({ ...nftMetadata, name: e.target.value })
					}
				/>
				<h2 className='text-left mt-4 font-bold px-2'>NFT Description</h2>
				{/* <textarea
					className='border rounded-lg mb-4 p-4'
					placeholder='lorem ipsum...'
					onChange={(e) =>
						setNftMetadata({ ...nftMetadata, description: e.target.value })
					}
				/> */}
				<label className='text-gray-700' htmlFor='name'>
					<textarea
						className='flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
						id='comment'
						placeholder='Describe your NFT...'
						name='NFT description'
						onChange={(e) =>
							setNftMetadata({ ...nftMetadata, description: e.target.value })
						}
					/>
				</label>
				<h2 className='text-left mt-4 font-bold'>Collection Name</h2>
				<input
					className='border rounded-lg p-4 mb-4'
					placeholder='asset name'
					onChange={(e) =>
						setNftCollectionMetadata({
							...nftCollectionMetadata,
							name: e.target.value,
						})
					}
				/>
				<h2 className='text-left mt-4 font-bold'>Collection Symbol</h2>
				<input
					className='border rounded-lg p-4 mb-4'
					placeholder='asset symbol'
					onChange={(e) =>
						setNftCollectionMetadata({
							...nftCollectionMetadata,
							symbol: e.target.value,
						})
					}
				/>

				<button
					className='inline-flex justify-center w-60 px-4 py-2 font-medium text-[#F7F7FF] bg-[#FE5F55] rounded-lg-md  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
					onClick={() => {
						createCollection();
					}}
				>
					Create this NFT (2 tx)
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
