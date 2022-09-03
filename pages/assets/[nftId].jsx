import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import GeneralDetails from '../../components/nft/GeneralDetails';
import ItemActivity from '../../components/nft/ItemActivity';
import NFTImage from '../../components/nft/NFTImage';

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex mr-4`,
  detailsContainer: `flex-[2] ml-4`,
};

const Nft = () => {
  /************************************************************************************************************************************/
  /*    SET UP PROVIDER
  /************************************************************************************************************************************/
  const infuraMumbaiApiKey = process.env.INFURA_KEY_POLYGON_MUMBAI;
  const provider = new ethers.providers.InfuraProvider(
    'maticmum',
    infuraMumbaiApiKey
  );

  const sdk = useMemo(() => {
    new ThirdwebSDK(provider);
  }, [provider]);

  /************************************************************************************************************************************/
  /*    GET PARAMS FROM ROUTER
  /************************************************************************************************************************************/
  const router = useRouter();
  const {
    query: { nftItemId, collectionId, isListed, collectionTitle },
  } = router;

  const [thisNft, setThisNft] = useState([]);
  const [selectedNft, setSelectedNft] = useState();
  const [listings, setListings] = useState([]);

  /************************************************************************************************************************************/
  /*    INSTANTIATE NFT MODULE
  /************************************************************************************************************************************/
  const nftModule = useMemo(() => {
    if (!collectionId) {
      console.log('No collectionId');
      return;
    }
    return sdk.getNFTCollection(collectionId);
  }, [collectionId, sdk]);

  /************************************************************************************************************************************/
  /*    GET THE NFT FROM COLLECTION
  /************************************************************************************************************************************/
  useEffect(() => {
    if (!nftModule) return;
    (async () => {
      console.log(
        `[nftId] - Getting item ${nftItemId} from collection at ${collectionId}`
      );
      const thisNft = await nftModule.getAll({ start: nftItemId, count: 1 });
      console.log('[nftId] - thisNft is:', thisNft);
      setThisNft(thisNft);
    })();
  }, [nftModule]);

  /************************************************************************************************************************************/
  /*    GET THE NFT PASSED IN AS PARAMS FROM THE LIST OF ALL NFTS IN THE COLLECTION
  /************************************************************************************************************************************/
  // useEffect(() => {
  //   if (!nfts) {
  //     console.log('nfts are not ready');
  //     return;
  //   }
  //   const selectedNftItem = nfts.find(
  //     (nft) => nft.metadata.id.toString() === nftItemId
  //   );
  //   console.log('[nftId].jsx - setting selectedNftItem as', selectedNftItem);
  //   setSelectedNft(selectedNftItem);
  // }, [nfts]);

  /************************************************************************************************************************************/
  /*    INSTANTIATE THE MARKETPLACE
  /************************************************************************************************************************************/
  const marketPlaceModule = useMemo(() => {
    if (!provider) {
      console.log('provider not yet ready');
      return;
    }
    return sdk.getMarketplace('0xe2e5dDda1ECA5127f4A85305be3ed102be9906CF');
  }, [sdk]);

  /************************************************************************************************************************************/
  /*    GET ACTIVE LISTING **IF IT IS LISTED**
  /************************************************************************************************************************************/
  useEffect(() => {
    if (!marketPlaceModule) return;
    (async () => {
      setListings(
        await marketPlaceModule.getActiveListings({
          tokenContract: collectionId,
          tokenId: nftItemId,
        })
      );
    })();
  }, [collectionId, nftItemId, marketPlaceModule]);

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className="flex justify-items-center">
              <NFTImage
                selectedNft={selectedNft}
                collectionTitle={collectionTitle}
              />
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails
                selectedNft={selectedNft}
                collectionTitle={collectionTitle}
              />
              {/* <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
                marketPlaceModule={marketPlaceModule}
                collectionId={collectionId}
              /> */}
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
  );
};

export default Nft;
