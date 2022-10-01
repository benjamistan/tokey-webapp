const navigation = [
  {
    name: 'Single NFT',
    href: 'singlenft',
    current: true,
  },
  {
    name: 'NFT Collection',
    href: 'nftcollection',
    current: false,
  },
  { name: 'NFT Drop', href: 'nftdrop', current: false },
  {
    name: 'Signature Drop',
    href: 'signaturedrop',

    current: false,
  },
  { name: 'Edition', href: 'edition', current: false },
  {
    name: 'Edition Drop',
    href: 'editiondrop',

    current: false,
  },

  {
    name: 'Multiwrap',
    href: 'multiwrap',

    current: false,
  },
  { name: 'Pack', href: 'pack', current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
      <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white'
                  : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <span className="truncate">{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <form action="#" method="POST">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Single NFT
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  For instantly minting a single NFT.
                </p>
              </div>
              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Token file
                </label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-tblue focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-gray-700"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Asset Name
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block w-full min-w-0 flex-grow rounded-md border-gray-300 focus:border-tblue focus:ring-tblue sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-3">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:tblue focus:ring-tblue sm:text-sm"
                      placeholder="describe your NFT token"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>{' '}
              <fieldset>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-tblue focus:ring-tblue"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                      >
                        I agree with the terms and conditions
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-tblue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-tblue focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
