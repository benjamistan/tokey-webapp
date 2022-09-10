const NFTImage = ({ selectedNft, collectionTitle }) => {
  const name = selectedNft?.metadata.name;

  if (!selectedNft) {
    return (
      <div>
        <div className="bg-[#fff] rounded-t-lg">
          <div className="text-tblue text-2xl font-bold">Loading...</div>
          <img src="/white_square_200x200.png" alt="" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="bg-[#fff] rounded-t-lg">
        <div className="text-tblue pb-2">{collectionTitle}</div>
        <div className="text-tblue text-3xl font-bold">{name}</div>
        <div className="w-96 h-96">
          <img
            src={selectedNft?.metadata.image}
            alt={name}
            width={380}
            height={380}
          />
        </div>
      </div>
    </div>
  );
};

export default NFTImage;
