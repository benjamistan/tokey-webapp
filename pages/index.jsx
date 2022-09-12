//import HubspotForm from 'react-hubspot-form';
import HubspotForm from '../components/Forms/HubspotForm';

export default function Home(props) {
  console.log(props);
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
                <div>
                  <p className="mt-6 text-xl text-gray-500">
                    We believe NFTs are the future. We&apos;ll help you get
                    there. Join our waiting list and stay in the loop.
                  </p>
                </div>
                {/*-----------------------------------------------------------------*/
                /* FORM
                /*-----------------------------------------------------------------*/}
                <div>
                  <HubspotForm />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none ">
                <img
                  className="w-full rounded-md lg:w-auto "
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
