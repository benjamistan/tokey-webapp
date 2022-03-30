import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

import {
	useMetamask,
	useWalletConnect,
	useCoinbaseWallet,
	useNetwork,
	useAddress,
	useDisconnect,
} from '@thirdweb-dev/react';

export default function Dropdown() {
	const connectWithCoinbaseWallet = useCoinbaseWallet();
	const connectWithMetamask = useMetamask();
	const connectWithWalletConnect = useWalletConnect();
	const disconnectWallet = useDisconnect();
	const address = useAddress();
	const network = useNetwork();

	const chainz = {
		1: 'Eth Mainnet',
		137: 'Polygon Mainnet',
		80001: 'Polygon Mumbai',
	};

	if (address) {
		console.log(network[0].data.chain.id);
	}

	if (address) {
		return (
			<div className='w-46 text-right text-white text-sm'>
				<Menu as='div' className='inline-block text-left'>
					<div className='block'>
						Address:{' '}
						<div className='inline font-thin'>
							{address.substring(0, 6) + '...'}
						</div>
					</div>
					<div>
						Chain:{' '}
						<div className='inline font-thin'>
							{network[0].data.chain && chainz[network[0].data.chain.id]}
						</div>
					</div>
					{/* <button
						className='bg-[#FE5F55] text-white group flex rounded-md items-center w-full px-2 pt-2 text-sm'
						onClick={disconnectWallet}
					>
						Disconnect
					</button> */}
				</Menu>
			</div>
		);
	}

	return (
		<div className='w-46 text-right pb-2'>
			<Menu as='div' className='relative inline-block text-left'>
				<Menu.Button className='inline-flex justify-center w-full px-4 py-2 font-medium text-[#F7F7FF] bg-[#FE5F55] rounded-md  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
					Connect
					<ChevronDownIcon
						className='w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100'
						aria-hidden='true'
					/>
				</Menu.Button>
				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'
				>
					<Menu.Items className='absolute right-0 w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
						<div className='px-1 py-1 '>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active ? 'bg-[#FE5F55] text-white' : 'text-gray-900'
										} group flex rounded-md items-center w-full px-2 pt-2 text-sm`}
										onClick={() => connectWithMetamask()}
									>
										Metamask
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active ? 'bg-[#FE5F55] text-white' : 'text-gray-900'
										} group flex rounded-md items-center w-full px-2 pt-2 text-sm`}
										onClick={() => connectWithCoinbaseWallet()}
									>
										Coinbase
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active ? 'bg-[#FE5F55] text-white' : 'text-gray-900'
										} group flex rounded-md items-center w-full px-2 pt-2 text-sm`}
										onClick={() => connectWithWalletConnect()}
									>
										WalletConnect
									</button>
								)}
							</Menu.Item>
							{/* <Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active ? 'bg-[#FE5F55] text-white' : 'text-gray-900'
										} group flex rounded-md items-center w-full px-2 pt-2 text-sm`}
									>
										Disconnect
									</button>
								)}
							</Menu.Item> */}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}

function EditInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 13V16H7L16 7L13 4L4 13Z'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
		</svg>
	);
}

function EditActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 13V16H7L16 7L13 4L4 13Z'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
		</svg>
	);
}

function DuplicateInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 4H12V12H4V4Z'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
			<path
				d='M8 8H16V16H8V8Z'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
		</svg>
	);
}

function DuplicateActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 4H12V12H4V4Z'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
			<path
				d='M8 8H16V16H8V8Z'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
		</svg>
	);
}

function ArchiveInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='5'
				y='8'
				width='10'
				height='8'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
			<rect
				x='4'
				y='4'
				width='12'
				height='4'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
			<path d='M8 12H12' stroke='#A78BFA' strokeWidth='2' />
		</svg>
	);
}

function ArchiveActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='5'
				y='8'
				width='10'
				height='8'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
			<rect
				x='4'
				y='4'
				width='12'
				height='4'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
			<path d='M8 12H12' stroke='#A78BFA' strokeWidth='2' />
		</svg>
	);
}

function MoveInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M10 4H16V10' stroke='#A78BFA' strokeWidth='2' />
			<path d='M16 4L8 12' stroke='#A78BFA' strokeWidth='2' />
			<path d='M8 6H4V16H14V12' stroke='#A78BFA' strokeWidth='2' />
		</svg>
	);
}

function MoveActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M10 4H16V10' stroke='#C4B5FD' strokeWidth='2' />
			<path d='M16 4L8 12' stroke='#C4B5FD' strokeWidth='2' />
			<path d='M8 6H4V16H14V12' stroke='#C4B5FD' strokeWidth='2' />
		</svg>
	);
}

function DeleteInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='5'
				y='6'
				width='10'
				height='10'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
			<path d='M3 6H17' stroke='#A78BFA' strokeWidth='2' />
			<path d='M8 6V4H12V6' stroke='#A78BFA' strokeWidth='2' />
		</svg>
	);
}

function DeleteActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='5'
				y='6'
				width='10'
				height='10'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
			<path d='M3 6H17' stroke='#C4B5FD' strokeWidth='2' />
			<path d='M8 6V4H12V6' stroke='#C4B5FD' strokeWidth='2' />
		</svg>
	);
}
