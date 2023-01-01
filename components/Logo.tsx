import Image from "next/image";
import { HL_Logo } from "../assets";

type Props = {
	[x: string]: any;
};

const Logo = (props: Props) => {
	return (
		<div className='flex items-center space-x-2'>
			<Image
				src={HL_Logo}
				alt='logo'
				width={50}
				height={50}
				className='rounded-full object-contain'
			/>
			<>{props.renderDefault(props)}</>
		</div>
	);
};

export default Logo;
