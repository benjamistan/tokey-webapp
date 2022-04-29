import React, { useState, useEffect } from 'react';
import { useMarketplace } from "@thirdweb-dev/react";

import AssetCard from './AssetCard';
import Filters from './Filters';

import { client } from '../../lib/sanityClient';


const AssetsView = () => {
  const [assets, setAssets] = useState([]);
  const [searchName, setSearchName] = useState(null);
  const [searchCollection, setSearchCollection] = useState('');
  const [currency, setCurrency] = useState();

  const [minSearch, setMinSearch] = useState(0);
  const [maxSearch, setMaxSearch] = useState(0);

  const marketAddress = "0x254aF607E999D48574c03f520B0637bd07ab81aC";
  const marketCollection = useMarketplace(marketAddress);


  useEffect(() => {
    getMarketCollections();
  }, []);

  console.log('assets:', assets);
  const getMarketCollections = async () => {
    marketCollection?.getAllListings().then(async (results) => {
      let mappedAssets = [];
      for(let asset of results ) {
        let name = await fetchCollectionData(client, asset.assetContractAddress);
        asset.collectionName =  name;
        mappedAssets.push(asset);
      };
      setAssets(mappedAssets);
    });

  }

  

  const fetchCollectionData = async (sanityClient = client, contractId) => {
    const query = `*[_type == "marketItems" && contractAddress == "${contractId}" ] {
      contractAddress,
      title
    }`;

    const collectionData = await sanityClient.fetch(query);
    if (collectionData[0]) {
      console.log('Collection data: ', collectionData);
    }
    return collectionData[0].title;

  };

  const onNameChange = (name) => {
    setSearchName(name)
  }

  const onCollectionChange = (collection) => {
    setSearchCollection(collection)
  }

  const onMinChange = (min) => {
    setMinSearch(min)
  }

  const onMaxChange = (max) => {
    setMaxSearch(max)
  }

  const onCurrencyChange = (type) => {
    console.log(type);
    setCurrency(type)
  }

  return (
    <div className="flex flex-row px-4">
      <div className="basis-[320px] bg-white ">
        <Filters
          onNameChange={onNameChange}
          onCollectionChange={onCollectionChange}
          onMinChange={onMinChange}
          onMaxChange={onMaxChange}
          onCurrencyChange={onCurrencyChange}
        />
      </div>
      <div className="basis-[calc(100%_-_320px)]">
        <div className='text-3xl font-extrabold pb-5'>Assets Collections</div>
        <div className='grid grid-cols-3 gap-3 py-4 justify-center'>
          {assets.length == 0 ? (<div> Loading... </div>) : null}
          {
            assets &&
            assets
              .filter(
                obj => {
                  return currency ? obj.buyoutCurrencyValuePerToken.symbol == currency : true
                })
              .filter(
                obj => {
                  return searchName ? obj.asset.name.includes(searchName) : true
                })
              .filter(
                obj => {
                  return minSearch ? parseFloat(obj.buyoutCurrencyValuePerToken.displayValue) >= minSearch : true
                })
              .filter(
                obj => {
                  return maxSearch ? parseFloat(obj.buyoutCurrencyValuePerToken.displayValue) <= maxSearch : true
                })
              .filter(
                obj => {
                  return searchCollection ? obj.asset.name.includes(searchCollection) : true
                })
              .map((asset, index) => {
                return (
                  <AssetCard key={`asset-${index}`} data={asset} />
                )
              })
          }
        </div>
      </div>
    </div>
  )
}

export default AssetsView
