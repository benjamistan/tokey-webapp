import React from 'react'

const index = () => {
	return (
		<div className="hover:-translate-y-[2px] hover:ease-[ all 0.1s ease 0s] hover:shadow-[0px_0px_8px_0px_rgb(4,17,29,25%)] group relative border-solid border-[1px] border-rgb(229, 232, 235) rounded-[10px] w-full">
			<div className="bg-gray-200 rounded-t-[10px] aspect-w-1 aspect-h-1 overflow-hidden lg:aspect-none ">
				<img src="https://picsum.photos/536/450" />
			</div>
			<div className="p-[12px] flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700 font-semibold">
						<a href="#">
							<span aria-hidden="true" className="absolute inset-0"></span>
							NFT Title
						</a>
					</h3>
					<p className="mt-1 text-sm text-gray-500">NFT SubTitle</p>
				</div>
				<p className="text-sm font-medium text-gray-600">$ 200</p>
			</div>
		</div>
	)
}

export default index