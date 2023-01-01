import React from "react";

type Props = {};

const Banner = (props: Props) => {
	return (
		<div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
			<div>
				<h1 className='text-5xl'>Personal Blog</h1>
				<h2 className='mt-5 md:mt-2'>Welcome to this part of my website!</h2>
			</div>
			<p className='mt-5 md:mt-2 text-gray-400 max-w-lg'>
				Details on my projects | Progress on my programming path | Much more...
			</p>
		</div>
	);
};

export default Banner;
