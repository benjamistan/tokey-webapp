import { AlchemyProvider } from '@ethersproject/providers';
import { useAddress, useSigner } from '@thirdweb-dev/react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { useEffect, useMemo, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { HiTag } from 'react-icons/hi';
import { IoMdWallet } from 'react-icons/io';

const maticERC20TokenAddress = '0x0000000000000000000000000000000000001010';

const style = {
	button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
	buttonIcon: `text-xl`,
	buttonText: `ml-2 my-auto text-lg font-semibold`,
};

const MakeOffer = ({
	isListed,
	selectedNft,
	listings,
	marketPlaceModule,
	collectionId,
}) => {
	const [selectedMarketNft, setSelectedMarketNft] = useState();
	const [enableButton, setEnableButton] = useState(false);
	const [isOwnedByConnectedWallet, setIsOwnedByConnectedWallet] =
		useState(false);

	const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY_POLYGON_MUMBAI;
	console.log('Purchase: apiKey is ', apiKey);
	const provider = useMemo(() => {
		return new AlchemyProvider('maticmum', apiKey);
	}, [apiKey]);

	const signer = useSigner();
	const sdk = new ThirdwebSDK(signer);

	const tokeyMarketAddress = process.env.NEXT_PUBLIC_TOKEY_MKT_ADDRESS_MUMBAI;
	const connectedWalletAddress = useAddress();

	/********************************************/
	/*    GET LISTING IF LISTED
  /********************************************/
	useEffect(() => {
		if (!listings || isListed === 'false') {
			console.log('no listings or this item is not listed');
			return;
		}
		(async () => {
			setSelectedMarketNft(
				listings.find((marketNft) => marketNft.asset?.id === selectedNft.id)
			);
		})();
	}, [selectedNft, listings, isListed]);

	/********************************************/
	/*    ENABLE BUY BUTTON
  /********************************************/
	useEffect(() => {
		if (!selectedMarketNft || !selectedNft) {
			console.log('No selected NFT');
			return;
		}

		setEnableButton(true);
	}, [selectedMarketNft, selectedNft]);

	/********************************************/
	/*    IS CONNECTED WALLET OWNER OF THIS NFT?
  /********************************************/
	useEffect(() => {
		if (!connectedWalletAddress || !selectedNft) {
			console.log('no collected wallet and/or selected NFT');
			return;
		}
		(() => {
			if (connectedWalletAddress === selectedNft.owner) {
				console.log('Purchase.jsx - this NFT is owned by connected wallet');
				setIsOwnedByConnectedWallet(true);
			}
		})();
	}, [connectedWalletAddress]);

	const confirmPurchase = (toastHandler = toast) =>
		toastHandler.success(`Purchase successful!`, {
			style: {
				background: '#04111d',
				color: '#fff',
			},
		});

	/********************************************/
	/*    LIST THE ITEM (IF YOU OWN IT)
  /********************************************/
	const listItem = async () => {
		// confirm attached wallet is the owner
		if (selectedNft.owner === connectedWalletAddress) {
			console.log(
				'Purchase.jsx - NFT is owned by the connected wallet. Creating a listing...'
			);
			const listing = {
				assetContractAddress: collectionId,
				tokenId: selectedNft.metadata.id.toNumber(),
				startTimestamp: new Date(),
				listingDurationInSeconds: 157680000, // this is 5 years in seconds
				quantity: 1,
				currencyContractAddress: maticERC20TokenAddress,
				buyoutPricePerToken: '1',
			};

			console.log('Purchase - we want to list this item', listing);

			const contract = sdk.getMarketplace(tokeyMarketAddress);
			const listingTx = await contract.direct.createListing(listing);
			const receipt = listingTx.receipt;
			console.log('Purchase.jsx: listing tx receipt', receipt);

			const listingId = listingTx.id;
			console.log('Purchase.jsx: listingId', listingId);
			return;
		}
		console.log('this NFT does not belong to the connected wallet');
	};

	/********************************************/
	/*    UNLIST THE ITEM (IF YOU OWN IT)
  /********************************************/
	const unlistItem = async () => {
		console.log('Purchase.jsx - unlisting item');

		if (!selectedMarketNft) {
			console.log('No selected Market NFT');
			return;
		}

		const contract = sdk.getMarketplace(tokeyMarketAddress);
		const unlistingTx = await contract.direct.cancelListing(
			selectedMarketNft.id
		);
		const receipt = unlistingTx.receipt;
		console.log('Purchase.jsx - unlisting tx receipt', receipt);
		return;
	};

	const buyItem = async (
		listingId = selectedMarketNft.id,
		quantityDesired = 1,
		module = marketPlaceModule
	) => {
		console.log(listingId, quantityDesired, module, 'david');
		await module
			.buyoutDirectListing({
				listingId: listingId,
				quantityDesired: quantityDesired,
			})
			.catch((error) => console.error(error));

		confirmPurchase();
	};

	return (
		<div>
			{!connectedWalletAddress ? (
				<div>Connect a wallet to interact with this NFT</div>
			) : (
				<div className='flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12'>
					{isOwnedByConnectedWallet ? (
						<div>
							{isListed === 'true' ? (
								<div
									className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}
									onClick={unlistItem}
								>
									<IoMdWallet className={style.buttonIcon} />
									<div className={style.buttonText}>Unlist Item</div>
								</div>
							) : (
								<div
									className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}
									onClick={listItem}
								>
									<IoMdWallet className={style.buttonIcon} />
									<div className={style.buttonText}>List Item</div>
								</div>
							)}
						</div>
					) : (
						<div className='flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12'>
							<Toaster position='top-right' reverseOrder={false} />
							{isListed === 'true' ? (
								<>
									<div
										onClick={() => {
											enableButton ? buyItem(selectedMarketNft.id, 1) : null;
										}}
										className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}
									>
										<IoMdWallet className={style.buttonIcon} />
										<div className={style.buttonText}>Buy Now</div>
									</div>
									<div
										className={`${style.button} border border-[#151c22]  bg-[#363840] hover:bg-[#4c505c]`}
									>
										<HiTag className={style.buttonIcon} />
										<div className={style.buttonText}>Make Offer</div>
									</div>
								</>
							) : (
								<div
									className={`${style.button} border border-[#151c22]  bg-[#363840] hover:bg-[#4c505c]`}
								>
									<HiTag className={style.buttonIcon} />
									<div className={style.buttonText}>Make Offer</div>
								</div>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default MakeOffer;
