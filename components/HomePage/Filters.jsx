import React from "react";

const Filters = ({ onNameChange, onCollectionChange, onMinChange, onMaxChange, onCurrencyChange }) => {
	let listPrice = [
		{ id: 1, title: "All", symbol: "" },
		{ id: 2, title: "WMATIC", symbol: "WMATIC" },
		{ id: 3, title: "MATIC", symbol: "MATIC" }
	];
	return (
		<div className="w-full mb-4 lg:w-11/12 lg:mt-6 h-[540px] shadow-lg border-r-3 border-gray-200">
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
							<select onChange={(e) => onCurrencyChange(e.target.value)} className="form-select appearance-none block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:shadow-xl focus:outline-none">
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
							<input
								onChange={(e) => onMinChange(e.target.value)}
								type="number"
								placeholder='Min'
								className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-tblue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-tblue dark:shadow-sm-light'
							/>
							<div className="mx-3">to</div>
							<input
								onChange={(e) => onMaxChange(e.target.value)}
								type="number"
								placeholder='Max'
								className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-tblue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-tblue dark:shadow-sm-light'
							/>
						</div>
					</div>
				</div>

				<div className="py-4">
					<div className="px-4 border-b">
						<h2 className="mb-0">Collections</h2>
						<div className="py-2">
							<div className="flex justify-center">
								<div className="mb-3 w-full">
									<input
										type="search"
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-tblue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-tblue dark:shadow-sm-light'
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

				<div className="py-4">
					<div className="px-4">
						<h2 className="mb-0">Name</h2>
						<div className="py-2">
							<div className="flex justify-center">
								<div className="mb-3 w-full">
									<input
										type="search"
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-tblue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-tblue dark:shadow-sm-light'
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
	);
};

export default Filters;
