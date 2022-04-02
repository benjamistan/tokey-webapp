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

import Form from '../components/Create/Form/Form';

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
			<Form
				setNftMetadata={setNftMetadata}
				nftMetadata={nftMetadata}
				nftCollectionMetadata={nftCollectionMetadata}
				setNftCollectionMetadata={setNftCollectionMetadata}
			/>
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
