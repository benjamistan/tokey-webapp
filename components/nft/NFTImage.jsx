const NFTImage = ({ selectedNft }) => {
	return (
		<div>
			<div className='bg-[#303339] p-2 rounded-t-lg border-[#151c22] border w-max'>
				<div>title</div>
				{console.log('Trying to get the image for this', selectedNft)}
				<img src={selectedNft?.metadata.image} alt='' />
			</div>
		</div>
	);
};

export default NFTImage;
