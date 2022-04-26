import React from "react";
import AssetCard from './AssetCard';
import Filters from './Filters';

const AssetsView = () => {
	return (

		<div className="flex flex-row h-[600px] px-4">
			<div className="basis-[320px] bg-white ">
				<Filters />
			</div>
			<div className="basis-[calc(100%_-_320px)]">
				<div className='text-3xl font-extrabold pb-5'>Assets Collections</div>
				<div className='grid grid-cols-3 gap-3 py-4 justify-center'>
					{
						[1, 2, 3].map((asset, index) => {
							return (
								<AssetCard key={`asset-${index}`} />
							)

						})
					}
				</div>
			</div>
		</div>

	)
}

export default AssetsView
