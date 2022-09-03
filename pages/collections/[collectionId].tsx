import { NFTMetadataOwner, ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import NFTCard from '../../components/nft/NFTCard';
import { client } from '../../lib/sanityClient';

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
  /************************************************************************************************************************************/
  /*    SET UP PROVIDER
  /************************************************************************************************************************************/
  const sdk = useMemo(() => {
    const infuraMumbaiApiKey = process.env.INFURA_KEY_POLYGON_MUMBAI;
    const provider = new ethers.providers.InfuraProvider(
      'maticmum',
      infuraMumbaiApiKey
    );
    return new ThirdwebSDK(provider);
  }, []);

  /************************************************************************************************************************************/
  /*    GET COLLECTION ID FROM ROUTER
  /************************************************************************************************************************************/
  const router = useRouter();
  const {
    query: { collectionId },
  } = router;
  const thisCollection = collectionId as string;

  interface Collection {
    bannerImageUrl?: string;
    imageUrl?: string;
    title?: string;
    creator?: string;
    allOwners?: string[];
    floorPrice?: number;
    description?: string;
    volumeTraded?: number;
  }

  const [collection, setCollection] = useState<Collection>({});
  const [nfts, setNfts] = useState<NFTMetadataOwner[]>([]);
  const [listings, setListings] = useState<any[]>([]);

  /************************************************************************************************************************************/
  /*    INSTANTIATE COLLECTION OBJECT FROM THIRDWEB SDK
  /************************************************************************************************************************************/
  const nftModule = useMemo(() => {
    if (!thisCollection) {
      console.log('thisCollection not ready');
      return;
    }
    return sdk.getNFTCollection(thisCollection);
  }, [sdk, thisCollection]);

  /************************************************************************************************************************************/
  /*    GET ALL NFTS IN THE COLLECTION INTO STATE
  /************************************************************************************************************************************/
  useEffect(() => {
    if (!nftModule) return;
    (async () => {
      console.log('[collectionId]: getting all NFTs in collection');
      const nfts = await nftModule.getAll();

      setNfts(nfts);
    })();
  }, [nftModule]);

  /************************************************************************************************************************************/
  /*    INSTANTIATE THE THIRDWEB SDK MARKETPLACE OBJECT
  /************************************************************************************************************************************/
  const marketPlaceModule = useMemo(() => {
    return sdk.getMarketplace('0xe2e5dDda1ECA5127f4A85305be3ed102be9906CF');
  }, [sdk]);

  /************************************************************************************************************************************/
  /*    GET THE ACTIVE LISTINGS FROM THIS COLLECTION
  /************************************************************************************************************************************/

  /************************************************************************************************************************************/
  /*    GET SANITY ENRICHMENT DATA FOR THE COLLECTION
  /************************************************************************************************************************************/
  const fetchCollectionData = async (sanityClient = client) => {
    const query = `*[_type == "marketItems" && contractAddress == "${thisCollection}" ] {
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
    //console.log('[collectionId] collectionData.title is', collection.title);
    //console.log('[collectionId] listings:', listings);
    //console.log('[collectionId] nfts:', nfts);
  }, [thisCollection]);

  return (
    <div className="overflow-hidden">
      <div className={style.bannerImageContainer}>
        <img
          className={style.bannerImage}
          src={
            collection?.bannerImageUrl
              ? collection.bannerImageUrl
              : '/white_square_200x200.png'
          }
          alt="banner"
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
            alt="Profile Image"
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
            <div className={style.statValue}>{collection?.floorPrice}</div>
            <div className={style.statName}>floor price</div>
          </div>
          <div className={style.collectionStat}>
            <div className={style.statValue}>{collection?.volumeTraded}</div>
            <div className={style.statName}>volume traded</div>
          </div>
        </div>
      </div>
      <div className={style.descriptionRow}>
        <div className={style.description}>{collection?.description}</div>
      </div>
      <div className="w-full flex justify-center pb-10">
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 justify-items-center max-w-fit">
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
