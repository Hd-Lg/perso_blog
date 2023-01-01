import { Banner, Header } from "../../components";
import "../../styles/globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head />
			<body>
				<Header />
				<Banner />
				{children}
			</body>
		</html>
	);
}
