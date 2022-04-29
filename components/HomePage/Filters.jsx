import React from "react";

const Filters = ({onNameChange, onCollectionChange, onMinChange, onMaxChange, onCurrencyChange}) => {
	let listPrice = [
		{ id: 1, title: "All", symbol: "" },
		{ id: 2, title: "WMATIC", symbol: "WMATIC" },
		{ id: 3, title: "MATIC", symbol: "MATIC" }
	];
	return (
		<div className="w-11/12 h-[540px] shadow-lg border-r-3 border-gray-200">
			<div className="w-full text-gray-400 bg-white border border-gray-200 border-b-0 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
				<button type="button" className="relative inline-flex items-center justify-between w-full px-4 py-4 text-lg font-medium border-b border-gray-200 rounded-t-lg hover:text-gray-600">
					<span className="text-black font-medium">Filter</span>
				</button>
			</div>
			<div className="py-4">
				<div className="px-4 border-b">
					<h2 className="mb-0">Price</h2>
					<div className="py-2">
						<div className="mb-3 w-full">
							<select onChange={(e) => onCurrencyChange(e.target.value)}className="form-select appearance-none block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-xl focus:outline-none">
								<option disabled value="">
									Please select currency
								</option>
								{listPrice.map((item, i) => (
									<option key={i} value={item.symbol}>
										{item.title}
									</option>
								))}
							</select>
						</div>
						<div className="flex mt-5 mb-3 items-center justify-space space-3">
							<input onChange={(e) => onMinChange(e.target.value)} type="number" className="rounded-xl px-2 py-2 border border-gray-200 focus:outline-none focus:border-gray-200 w-full" placeholder="Min" />
							<div className="mx-3">to</div>
							<input onChange={(e) => onMaxChange(e.target.value)} type="number" className="rounded-xl px-2 py-2 border border-gray-200 focus:outline-none focus:border-gray-200 w-full" placeholder="Max" />
						</div>
					</div>
				</div>

				<div className="py-4">
					<div className="px-4 border-b">
						<h2 className="mb-0">Collections</h2>
						<div className="py-2">
							<div className="flex justify-center">
								<div className="mb-3 w-full">
									<div className="input-group relative flex w-full mb-4">
										<button
											className="btn inline-block px-3 py-3 bg-transparent text-gray-400 font-medium text-xs leading-tight uppercase rounded-lg border border-gray-200 border-r-0 rounded-r-0 rounded-tr-none rounded-br-none hover:bg-blue-700 hover:bg-transparent focus:bg-transparent focus:outline-none focus:ring-0 active:bg-transparent"
											type="button"
											id="collection-search"
										>
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
												></path>
											</svg>
										</button>
										<input
											type="search"
											className="form-control relative flex-auto min-w-0 block w-full px-3 pl-0 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-200 rounded-lg rounded-tl-none rounded-bl-none border-l-0 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-200 focus:outline-none"
											placeholder="Search"
											aria-label="Search"
											aria-describedby="collection-search"
											onChange={(e) => onCollectionChange(e.target.value)}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="py-4">
					<div className="px-4">
						<h2 className="mb-0">Name</h2>
						<div className="py-2">
							<div className="flex justify-center">
								<div className="mb-3 w-full">
									<div className="input-group relative flex w-full mb-4">
										<button
											className="btn inline-block px-3 py-3 bg-transparent text-gray-400 font-medium text-xs leading-tight uppercase rounded-lg border border-gray-200 border-r-0 rounded-r-0 rounded-tr-none rounded-br-none hover:bg-blue-700 hover:bg-transparent focus:bg-transparent focus:outline-none focus:ring-0 active:bg-transparent"
											type="button"
											id="name-search"
										>
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
												></path>
											</svg>
										</button>
										<input
											type="search"
											className="form-control relative flex-auto min-w-0 block w-full px-3 pl-0 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-200 rounded-lg rounded-tl-none rounded-bl-none border-l-0 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-200 focus:outline-none"
											placeholder="Search"
											aria-label="Search"
											aria-describedby="name-search"
											onChange={(e) => onNameChange(e.target.value)}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
