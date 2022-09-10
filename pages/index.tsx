import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string>();

  const [{ data, loading }, refetch] = useAxios(
    {
      url: '/api/emailSignup',
      method: 'POST',
      data: { email, message },
    },
    {
      manual: true,
    }
  );

  console.log('success is', data?.success);
  console.log('loading is currently', loading);
  console.log('message is currently', data?.message);

  useEffect(() => {
    if (!loading) {
      setEmail('');
      setMessage('');
    }
  }, [data?.success, loading]);

  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:pb-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div className="mt-20">
                <div className="pb-6">
                  <img src="assets/tokey-logo.svg" alt="Tokey"></img>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-tblue sm:text-5xl">
                    The World&apos;s Newest NFT Marketplace
                  </h1>
                </div>
                {/*-----------------------------------------------------------------*/
                /* FORM
                /*-----------------------------------------------------------------*/}
                {data?.message ? (
                  <div className="mt-10 text-xl text-gray-500">
                    {data?.message}
                  </div>
                ) : (
                  <div>
                    <p className="mt-6 text-xl text-gray-500">
                      We believe NFTs are the future. We&apos;ll help you get
                      there. Join our waiting list and stay in the loop.
                    </p>
                    <form
                      action="#"
                      className="mt-12 sm:flex sm:w-full sm:max-w-lg"
                    >
                      <div className="min-w-0 flex-1">
                        <label htmlFor="hero-email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="hero-email"
                          type={'email'}
                          className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-black"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-3">
                        <button
                          type={'submit'}
                          className="block w-full rounded-md border border-transparent bg-tblue px-5 py-3 text-base font-medium text-white shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
                          disabled={loading}
                          onClick={() => refetch()}
                        >
                          Notify me
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none ">
                <img
                  className="w-full rounded-md lg:h-full lg:w-auto lg:max-w-none"
                  src="assets/lemon_smaller.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:pb-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8 text-gray-300">
            &copy; Tokey Ltd 2022
          </div>
        </div>
      </main>
    </div>
  );
}
