import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import { client } from '../../lib/sanityClient';

import { AlchemyProvider } from '@ethersproject/providers';

import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { useNFTCollection, useNFTList } from '@thirdweb-dev/react';

import NFTCard from '../../components/NFTCard';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';

const style = {
	bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
	bannerImage: `w-full object-cover`,
	infoContainer: `w-screen px-4`,
	midRow: `w-full flex justify-center text-black`,
	endRow: `w-full flex justify-end text-black`,
	profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
	socialIconsContainer: `flex text-3xl mb-[-2rem]`,
	socialIconsWrapper: `w-44`,
	socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
	socialIcon: `my-2`,
	divider: `border-r-2`,
	title: `text-5xl font-bold mb-4`,
	createdBy: `text-lg mb-4`,
	statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
	collectionStat: `w-1/4`,
	statValue: `text-3xl font-bold w-full flex items-center justify-center`,
	ethLogo: `h-6 mr-2`,
	statName: `text-lg w-full text-center mt-1`,
	description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
};

const Collection = () => {
	const router = useRouter();

	// Setting up the provider and thirdweb sdk
	const apiKey = `RxnA6DDDU0-ukw5KwC57KafClF9si1cB`;
	const provider = useMemo(() => {
		return new AlchemyProvider('maticmum', apiKey);
	}, [apiKey]);
	const sdk = new ThirdwebSDK(provider);

	const { collectionId } = router.query;
	const [collectionSanityData, setCollectionSanityData] = useState({});
	const [nfts, setNfts] = useState([]);
	const [listings, setListings] = useState([]);

	// instantiating the NFT Collection in the SDK
	// const nftModule = useMemo(() => {
	// 	if (!provider) {
	// 		console.log('Not yet a Provider');
	// 		return;
	// 	}
	// 	const res = sdk.getNFTCollection(collectionId);
	// 	return res;
	// }, [provider]);

	// instantiating the Marketplace in the SDK
	const marketPlaceModule = useMemo(() => {
		if (!provider) {
			console.log('Not yet a provider');
			return;
		}
		const res = sdk.getMarketplace(
			'0x2EFf51666da8686fE7Ae5092da5D94A60b3eBada'
		);
		return res;
	}, [provider]);

	// try getting NFTS
	useEffect(() => {
		async function fetchNftData() {
			const nfts = await collectionObject.getAll(); // this is the problematic one
		}
		fetchNftData();
		setNfts(nfts);
	}, []);

	// const nftCollection = useNFTCollection(collectionId);
	// setNfts(useNFTList(nftCollection));
	// console.log('show me some NFTs:', nfts);

	// handle changes to the Marketplace
	useEffect(() => {
		if (!marketPlaceModule) {
			console.log('Not yet a Market place module');
			return;
		}
		(async () => {
			setListings(await marketPlaceModule.getAllListings());
		})();
	}, [marketPlaceModule]);

	// Retrieve data on the collection from our Sanity store
	const fetchCollectionSanityData = async (sanityClient = client) => {
		const query = `*[_type == "marketItems" && contractAddress == "${collectionId}" ] {
      "imageUrl": profileImage.asset->url,
      "bannerImageUrl": bannerImage.asset->url,
      volumeTraded,
      createdBy,
      contractAddress,
      "creator": createdBy->userName,
      title, floorPrice,
      "allOwners": owners[]->,
      description
    }`;

		const collectionData = await sanityClient.fetch(query);
		if (collectionData[0]) {
			console.log('Collection Sanity data: ', collectionData);
		}
		await setCollectionSanityData(collectionData[0]);
	};

	// get new data from Sanity when collection is changed
	useEffect(() => {
		fetchCollectionSanityData();
		console.log('Thirdweb NFT Module:', collectionObject);
		console.log('Thirdweb Marketplace:', marketPlaceModule);
		console.log('nfts', nfts);
		console.log('listings:', listings);
	}, [collectionId]);

	return (
		<div className='overflow-hidden'>
			<div className={style.bannerImageContainer}>
				<img
					className={style.bannerImage}
					src={
						collectionSanityData?.bannerImageUrl
							? collectionSanityData.bannerImageUrl
							: 'https://via.placeholder.com/200'
					}
					alt='banner'
				/>
			</div>
			<div className={style.infoContainer}>
				<div className={style.midRow}>
					<img
						className={style.profileImg}
						src={
							collectionSanityData?.imageUrl
								? collectionSanityData.imageUrl
								: 'https://via.placeholder.com/200'
						}
						alt='Profile Image'
					/>
				</div>
			</div>
			<div>
				<div className={style.endRow}>
					<div className={style.socialIconsContainer}>
						<div className={style.socialIconsWrapper}>
							<div className={style.socialIconsContent}>
								<div className={style.socialIcon}>
									<CgWebsite />
								</div>
								<div className={style.divider} />
								<div className={style.socialIcon}>
									<AiOutlineInstagram />
								</div>
								<div className={style.divider} />
								<div className={style.socialIcon}>
									<AiOutlineTwitter />
								</div>
								<div className={style.divider} />
								<div className={style.socialIcon}>
									<HiDotsVertical />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.midRow}>
				<div className={style.title}>{collectionSanityData?.title}</div>
			</div>
			<div className={style.midRow}>
				<div className={style.createdBy}>
					Created by{' '}
					<span className='text-[#2081e2]'>
						{collectionSanityData?.creator}
					</span>
				</div>
			</div>
			<div className={style.midRow}>
				<div className={style.statsContainer}>
					<div className={style.collectionStat}>
						<div className={style.statValue}>{nfts.length}</div>
						<div className={style.statName}>items</div>
					</div>
					<div className={style.collectionStat}>
						<div className={style.statValue}>
							{collectionSanityData?.allOwners
								? collectionSanityData.allOwners.length
								: ''}
						</div>
						<div className={style.statName}>owners</div>
					</div>
					<div className={style.collectionStat}>
						<div className={style.statValue}>
							<img
								src='https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg'
								alt='eth'
								className={style.ethLogo}
							/>
							{collectionSanityData?.floorPrice}
						</div>
						<div className={style.statName}>floor price</div>
					</div>
					<div className={style.collectionStat}>
						<div className={style.statValue}>
							<img
								src='https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg'
								alt='eth'
								className={style.ethLogo}
							/>
							{collectionSanityData?.volumeTraded}.5K
						</div>
						<div className={style.statName}>volume traded</div>
					</div>
				</div>
			</div>
			<div className={style.midRow}>
				<div className={style.description}>
					{collectionSanityData?.description}
				</div>
			</div>
			<div className='flex flex-wrap '>
				{nfts.length == 0 ? (
					<div className={style.midRow}>No NFTs</div>
				) : (
					<div>Some NFTs</div>
				)}
			</div>
		</div>
	);
};

export default Collection;
