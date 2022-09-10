const NewsletterSignup = () => {
  return (
    <div className="pt-6 mb-10">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 justify-center items-center text-white">
        <div className="font-bold text-3xl">Join mailing list:</div>
        <div>
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Your email address"
          />
        </div>
        <div>
          <button
            className="inline-block font-semibold px-10 align-middle py-2 bg-[#363840] rounded mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
