import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

import {
  useAddress,
  useCoinbaseWallet,
  useDisconnect,
  useMetamask,
  useNetwork,
  useWalletConnect,
} from '@thirdweb-dev/react';

export default function WalletConnectDropdown() {
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const address = useAddress();
  const network = useNetwork();
  const disconnectWallet = useDisconnect();

  const chainz = {
    1: 'Eth Mainnet',
    3: 'Eth Rinkeby',
    56: 'Binance SC',
    137: 'Polygon Mainnet',
    80001: 'Polygon Mumbai',
  };

  if (address) {
    return (
      <div className="flex text-right text-black text-sm mt-2">
        <Menu>
          <Menu as="div" className="inline-block text-left">
            <div className="block font-semibold">
              Address:{' '}
              <div className="inline font-thin">
                {address.substring(0, 6) + '...'}
              </div>
            </div>
            <div className="font-semibold">
              Chain:{' '}
              <div className="inline font-thin">
                {network[0].data.chain && chainz[network[0].data.chain.id]}
              </div>
            </div>
          </Menu>
        </Menu>
      </div>
    );
  }

  return (
    <div className="ml-10 space-x-4">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 font-medium text-sm text-[#F7F7FF] bg-tblue rounded-md  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Connect Wallet
          <ChevronDownIcon
            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-36 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-tblue text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-1 text-sm`}
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
                      active ? 'bg-tblue text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-1 text-sm`}
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
                      active ? 'bg-tblue text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-1 text-sm`}
                    onClick={() => connectWithWalletConnect()}
                  >
                    WalletConnect
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
