import React, { useEffect, useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Router from 'next/router';

const style = {
	wrapper: ` bg-[#303339] flex-auto w-[14rem] h-[22rem] pb-5 rounded-2xl overflow-hidden cursor-pointer`,
	imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
	nftImg: `w-full object-cover`,
	details: `p-3`,
	info: ` justify-between text-[#e4e8eb] drop-shadow-xl`,
	infoLeft: `flex-0.6 flex-wrap`,
	collectionName: `font-semibold text-sm text-[#8a939b]`,
	assetName: `font-bold text-lg mt-2`,
	priceInfo: `flex justify-items-end`,
	priceTag: `font-semibold text-sm text-[#8a939b] mr-2`,
	priceValue: `flex text-sm font-bold`,
	ethLogo: `h-5 mr-2`,
	likes: `text-[#8a939b] font-bold flex items-center w-full justify-end`,
	likeIcon: `text-xl mr-2`,
};

const NFTCard = ({ nftItem, title, listings }) => {
	const [isListed, setIsListed] = useState(false);
	const [price, setPrice] = useState(0);

	const collectionTitle = title;

	const router = useRouter();
	const {
		query: { collectionId },
	} = router;

	const nftItemId = nftItem.metadata.id.toNumber();
	//console.log('NFTCard - we have just set the nftItemId to', nftItemId);

	/****************************************************/
	/*    DISCOVER LISTING STATUS AND PRICE IF LISTED
  /****************************************************/
	useEffect(() => {
		// get the NFT id
		//const nftItemId = nftItem.metadata.id.toNumber();

		// from listings, get the matches between id and listing
		const listing = listings.find(
			(listing) => listing.asset.id.toNumber() === nftItemId
		);

		if (Boolean(listing) && listing.assetContractAddress === collectionId) {
			setIsListed(true);
			setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
		}
	}, [listings, nftItem]);

	return (
		<div
			className={style.wrapper}
			onClick={() => {
				Router.push({
					pathname: `/nfts/${nftItemId}`,
					query: {
						nftItemId: nftItemId,
						isListed: isListed,
						collectionId: collectionId,
						collectionTitle: collectionTitle,
					},
				});
			}}
		>
			<div className={style.imgContainer}>
				<img
					src={nftItem.metadata.image}
					alt={nftItem.metadata.name}
					className={style.nftImg}
				/>
			</div>
			<div className={style.details}>
				<div className={style.info}>
					<div className={style.infoLeft}>
						<div className={style.collectionName}>{title}</div>
						<div className={style.assetName}>{nftItem.metadata.name}</div>
						{!isListed ? (
							<div className={style.priceInfo}>
								<div className={style.priceTag}>&nbsp;</div>
								<div className={style.priceValue}>&nbsp;</div>
							</div>
						) : (
							<div className={style.priceInfo}>
								<div className={style.priceTag}>Price</div>
								<div className={style.priceValue}>{price} MATIC</div>
							</div>
						)}
						<div className={style.likes}>
							<span className={style.likeIcon}>
								<BiHeart />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NFTCard;
