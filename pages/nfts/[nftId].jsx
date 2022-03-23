import Header from '../../components/Header/Header';
import { useEffect, useMemo, useState } from 'react';
import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { useRouter } from 'next/router';
import NFTImage from '../../components/nft/NFTImage';
import GeneralDetails from '../../components/nft/GeneralDetails';
import ItemActivity from '../../components/nft/ItemActivity';
import Purchase from '../../components/Purchase';

const style = {
	wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
	container: `container p-6`,
	topContent: `flex`,
	nftImgContainer: `flex-1 mr-4`,
	detailsContainer: `flex-[2] ml-4`,
};

const apiKey = `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY_POLYGON_MUMBAI}`;
console.log('apiKey is', apiKey);

const Nft = () => {
	const { provider } = useWeb3();
	const [selectedNft, setSelectedNft] = useState();
	const [listings, setListings] = useState([]);
	const router = useRouter();

	const nftModule = useMemo(() => {
		if (!provider) return;

		const sdk = new ThirdwebSDK(provider.getSigner(), apiKey);
		return sdk.getNFTModule('0x77053C5e0cd65Af65f39b58d3e1BCE52DA246bFc');
	}, [provider]);

	useEffect(() => {
		if (!nftModule) return;
		(async () => {
			const nfts = await nftModule.getAll();

			const selectedNftItem = nfts.find((nft) => nft.id === router.query.nftId);

			setSelectedNft(selectedNftItem);
		})();
	}, [nftModule]);

	const marketPlaceModule = useMemo(() => {
		if (!provider) return;

		const sdk = new ThirdwebSDK(provider.getSigner(), apiKey);

		return sdk.getMarketplaceModule(
			'0x2EFf51666da8686fE7Ae5092da5D94A60b3eBada'
		);
	}, [provider]);

	useEffect(() => {
		if (!marketPlaceModule) return;
		(async () => {
			setListings(await marketPlaceModule.getAllListings());
		})();
	}, [marketPlaceModule]);

	return (
		<div>
			<Header />
			<div className={style.wrapper}>
				<div className={style.container}>
					<div className={style.topContent}>
						<div className={style.nftImgContainer}>
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
