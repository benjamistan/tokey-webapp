import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { AlchemyProvider } from '@ethersproject/providers';
import { client } from '../../lib/sanityClient';
import NFTCard from '../../components/nft/NFTCard';

const style = {
	bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
	bannerImage: `w-full object-cover`,
	infoContainer: `w-screen px-4`,
	midRow: `w-full flex justify-center text-black `,
	descriptionRow: 'w-full flex justify-center text-black pb-10',
	endRow: `w-full flex justify-end text-black`,
	profileImg: `w-40 h-40 object-cover rounded-2xl bg-white border-2 border-[#202225] mt-[-4rem]`,
	socialIconsContainer: `flex text-3xl mb-[-2rem]`,
	socialIconsWrapper: `w-44`,
	socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
	socialIcon: `my-2`,
	divider: `border-r-2`,
	title: `text-5xl font-bold mb-4 pt-4`,
	createdBy: `text-lg mb-4`,
	statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
	collectionStat: `w-1/4`,
	statValue: `text-3xl font-bold w-full flex items-center justify-center`,
	ethLogo: `h-6 mr-2`,
	statName: `text-lg w-full text-center mt-1`,
	description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
};

const Collection = () => {
	const apiKey = 'RxnA6DDDU0-ukw5KwC57KafClF9si1cB';
	const provider = new AlchemyProvider('maticmum', apiKey);
	const sdk = new ThirdwebSDK(provider);

	const router = useRouter();
	const {
		query: { collectionId },
	} = router;

	const [collection, setCollection] = useState({});
	const [nfts, setNfts] = useState([]);
	const [listings, setListings] = useState([]);

	// create the Collection object
	const nftModule = useMemo(() => {
		if (!collectionId) {
			console.log('collectionId not ready');
			return;
		}
		return sdk.getNFTCollection(collectionId);
	}, [collectionId]);

	// get the NFTs from the Collection
	useEffect(() => {
		if (!nftModule) return;
		(async () => {
			const nfts = await nftModule.getAll();

			setNfts(nfts);
		})();
	}, [nftModule]);

	// create the Marketplace object
	const marketPlaceModule = useMemo(() => {
		return sdk.getMarketplace('0xe2e5dDda1ECA5127f4A85305be3ed102be9906CF');
	}, []);

	// get the listings from the Marketplace
	useEffect(() => {
		if (!marketPlaceModule) return;
		(async () => {
			setListings(await marketPlaceModule.getAllListings());
		})();
	}, [marketPlaceModule]);

	// get our Collection data from Sanity
	const fetchCollectionData = async (sanityClient = client) => {
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
		await setCollection(collectionData[0]);
	};

	useEffect(() => {
		fetchCollectionData();
		//console.log('[collectionId] collectionId is', collectionId);
		console.log('[collectionId] collectionData.title is', collection.title);
		//console.log('[collectionId] listings:', listings);
		//console.log('[collectionId] nfts:', nfts);
	}, [collectionId, listings, nfts]);

	return (
		<div className='overflow-hidden'>
			<div className={style.bannerImageContainer}>
				<img
					className={style.bannerImage}
					src={
						collection?.bannerImageUrl
							? collection.bannerImageUrl
							: '/white_square_200x200.png'
					}
					alt='banner'
				/>
			</div>
			<div className={style.infoContainer}>
				<div className={style.midRow}>
					<img
						className={style.profileImg}
						src={
							collection?.imageUrl
								? collection.imageUrl
								: '/white_square_200x200.png'
						}
						alt='Profile Image'
					/>
				</div>
			</div>
			<div className={style.midRow}>
				<div className={style.title}>{collection?.title}</div>
			</div>
			<div className={style.midRow}>
				<div className={style.createdBy}>
					Created by <span>{collection?.creator}</span>
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
							{collection?.allOwners ? collection.allOwners.length : 0}
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
							{collection?.floorPrice}
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
							{collection?.volumeTraded}
						</div>
						<div className={style.statName}>volume traded</div>
					</div>
				</div>
			</div>
			<div className={style.descriptionRow}>
				<div className={style.description}>{collection?.description}</div>
			</div>
			<div className='w-full flex justify-center pb-10'>
				<div className='grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 justify-items-center max-w-fit'>
					{nfts.map((nftItem, id) => (
						<NFTCard
							key={id}
							nftItem={nftItem}
							title={collection?.title}
							listings={listings}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Collection;
