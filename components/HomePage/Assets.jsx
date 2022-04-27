import React, { useState, useEffect } from 'react';
import { useMarketplace } from "@thirdweb-dev/react";

import AssetCard from './AssetCard';
import Filters from './Filters';

const AssetsView = () => {
  const [assets, setAssets] = useState([]);
  const marketAddress = "0x254aF607E999D48574c03f520B0637bd07ab81aC";
  const marketCollection = useMarketplace(marketAddress);
    
  useEffect(() => {
    marketCollection?.getAllListings().then((assets) => setAssets(assets));
  }, []);
  
  return (
    <div className="flex flex-row px-4">
      <div className="basis-[320px] bg-white ">
        <Filters />
      </div>
      <div className="basis-[calc(100%_-_320px)]">
        <div className='text-3xl font-extrabold pb-5'>Assets Collections</div>
        <div className='grid grid-cols-3 gap-3 py-4 justify-center'>
          {
            assets && assets.map((asset, index) => {
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
