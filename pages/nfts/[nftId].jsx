import Header from '../../components/Header/Header';
import { useEffect, useMemo, useState } from 'react';
import { AlchemyProvider } from '@ethersproject/providers';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { useRouter } from 'next/router';
import NFTImage from '../../components/nft/NFTImage';
import GeneralDetails from '../../components/nft/GeneralDetails';
import ItemActivity from '../../components/nft/ItemActivity';
import Purchase from '../../components/Purchase';

const style = {
	wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
	container: `container p-6`,
	topContent: `flex`,
	nftImgContainer: `flex mr-4`,
	detailsContainer: `flex-[2] ml-4`,
};

const Nft = () => {
	const apiKey = `RxnA6DDDU0-ukw5KwC57KafClF9si1cB`;
	const provider = useMemo(() => {
		return new AlchemyProvider('maticmum', apiKey);
	}, [apiKey]);

	const router = useRouter();
	const {
		query: { nftItemId, collectionId, isListed },
	} = router;

	const [nfts, setNfts] = useState([]);
	const [selectedNft, setSelectedNft] = useState();
	const [listings, setListings] = useState([]);

	const nftModule = useMemo(() => {
		if (!provider) {
			console.log('No provider');
			return;
		}

		if (!collectionId) {
			console.log('No collectionId');
			return;
		}

		const sdk = new ThirdwebSDK(provider);
		return sdk.getNFTCollection(collectionId);
	}, [provider, collectionId]);

	useEffect(() => {
		if (!nftModule) return;
		(async () => {
			setNfts(await nftModule.getAll());
		})();
	}, [nftModule]);

	useEffect(() => {
		if (!nfts) {
			console.log('nfts are not ready');
			return;
		}
		const selectedNftItem = nfts.find(
			(nft) => nft.metadata.id.toString() === nftItemId
		);
		console.log('setting selectedNftItem as', selectedNftItem);
		setSelectedNft(selectedNftItem);
	}, [nfts]);

	const marketPlaceModule = useMemo(() => {
		if (!provider) return;

		const sdk = new ThirdwebSDK(provider);

		return sdk.getMarketplace('0xe2e5dDda1ECA5127f4A85305be3ed102be9906CF');
	}, [provider, nftModule]);

	useEffect(() => {
		if (!marketPlaceModule) return;
		(async () => {
			setListings(await marketPlaceModule.getAllListings());
		})();
	}, [marketPlaceModule]);

	return (
		<div>
			<div className={style.wrapper}>
				<div className={style.container}>
					<div className={style.topContent}>
						<div className='flex justify-items-center'>
							<NFTImage selectedNft={selectedNft} />
						</div>
						<div className={style.detailsContainer}>
							<GeneralDetails selectedNft={selectedNft} />
							<Purchase
								isListed={router.query.isListed}
								selectedNft={selectedNft}
								listings={listings}
								marketPlaceModule={marketPlaceModule}
							/>
						</div>
					</div>
					<ItemActivity />
				</div>
			</div>
		</div>
	);
};

export default Nft;
