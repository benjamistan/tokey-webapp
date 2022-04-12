import React from 'react';

const NFTCardCarousel = () => {
	return (
		<div className='py-16 bg-gray-50'>
			<div className='container m-auto text-gray-600 md:px-12 xl:px-6'>
				<div className='mb-12 space-y-4 px-6 md:px-0'>
					<h2 className='text-center text-2xl text-gray-900 font-bold md:text-4xl'>
						We have some fans.
					</h2>
					<p className='text-center'>
						We don&apos;t like to brag, but we don&apos;t mind letting our
						customers do it for us. <br />
						Here are a few nice things folks have said about our themes over the
						years.
					</p>
				</div>
				<div className='swiper mySwiper'>
					<div className='swiper-wrapper pb-8'>
						<div className='swiper-slide !bg-transparent px-6 md:px-0'>
							<div className='rounded-xl bg-white shadow-xl md:mx-auto lg:w-9/12 xl:w-7/12'>
								<div className='grid md:grid-cols-2'>
									<img
										src='images/card.webp'
										className='rounded-t-xl h-full w-full object-cover md:rounded-l-xl md:rounded-tr-none'
										alt='image'
										width='640'
										height='422'
										loading='lazy'
									/>
									<div className='mx-auto space-y-6 p-6 text-center sm:p-8'>
										<div className='w-24 mx-auto'>
											<img
												src='images/clients/client-4.png'
												alt='company logo'
												height='400'
												width='142'
												loading='lazy'
											/>
										</div>
										<p className='text-gray-600'>
											{' '}
											<span className='font-serif'>&quot;</span> Lorem ipsum
											dolor sit amet consectetur adipisicing elit. Quaerat
											repellat perspiciatis excepturi est. Non ipsum iusto
											aliquam consequatur repellat provident, omnis ut, sapiente
											voluptates veritatis cum deleniti repudiandae ad
											doloribus. <span className='font-serif'>&quot;</span>
										</p>
										<h6 className='text-lg font-semibold leading-none'>
											John Doe
										</h6>
									</div>
								</div>
							</div>
						</div>

						<div className='swiper-slide !bg-transparent px-6 md:px-0'>
							<div className='rounded-xl bg-white shadow-xl md:mx-auto lg:w-7/12'>
								<div className='grid md:grid-cols-2'>
									<img
										src='images/card2.webp'
										className='rounded-t-xl h-full w-full object-cover md:rounded-l-xl md:rounded-tr-none'
										alt='image'
										width='640'
										height='422'
										loading='lazy'
									/>
									<div className='mx-auto space-y-6 p-6 text-center sm:p-8'>
										<div className='w-24 mx-auto'>
											<img
												className='mx-auto w-24'
												src='images/clients/client-3.png'
												alt='company logo'
												height='400'
												width='142'
												loading='lazy'
											/>
										</div>
										<p className='text-gray-600'>
											{' '}
											<span className='font-serif'>&quot;</span> Lorem ipsum
											dolor sit amet consectetur adipisicing elit. Quaerat
											repellat perspiciatis excepturi est. Non ipsum iusto
											aliquam consequatur repellat provident, omnis ut, sapiente
											voluptates veritatis cum deleniti repudiandae ad
											doloribus. <span className='font-serif'>&quot;</span>
										</p>
										<h6 className='text-lg font-semibold leading-none'>
											John Doe
										</h6>
									</div>
								</div>
							</div>
						</div>

						<div className='swiper-slide !bg-transparent px-6 md:px-0'>
							<div className='rounded-xl bg-white shadow-xl md:mx-auto lg:w-7/12'>
								<div className='grid md:grid-cols-2'>
									<img
										src='images/card3.webp'
										className='rounded-t-xl h-full w-full object-cover md:rounded-l-xl md:rounded-tr-none'
										alt='image'
										width='640'
										height='422'
										loading='lazy'
									/>
									<div className='mx-auto space-y-6 p-6 text-center sm:p-8'>
										<div className='w-24 mx-auto'>
											<img
												className='mx-auto w-24'
												src='images/clients/client-8.png'
												alt='company logo'
												height='400'
												width='142'
												loading='lazy'
											/>
										</div>
										<p className='text-gray-600'>
											{' '}
											<span className='font-serif'>&quot;</span> Lorem ipsum
											dolor sit amet consectetur adipisicing elit. Quaerat
											repellat perspiciatis excepturi est. Non ipsum iusto
											aliquam consequatur repellat provident, omnis ut, sapiente
											voluptates veritatis cum deleniti repudiandae ad
											doloribus. <span className='font-serif'>&quot;</span>
										</p>
										<h6 className='text-lg font-semibold leading-none'>
											John Doe
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='swiper-pagination'></div>
				</div>
			</div>
		</div>
	);
};

export default NFTCardCarousel;
