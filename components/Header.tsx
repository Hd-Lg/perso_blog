import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HL_Logo } from "../assets";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
			<div className='flex items-center space-x-2'>
				<Link href={"/"}>
					<Image
						src={HL_Logo}
						alt='logo'
						width={50}
						height={50}
						className='rounded-full'
					/>
				</Link>
				<h1>Hadrien-Lg&apos;s Blog</h1>
			</div>
			<div>
				{/* Change link later */}
				<Link
					href={"/"}
					className='px-5 py-3 text-xs text-gray-500 flex items-center rounded-full text-center bg-gray-200'
				>
					Go back to Hadrien-lg.com
				</Link>
			</div>
		</header>
	);
};

export default Header;
