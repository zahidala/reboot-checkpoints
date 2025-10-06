import "./globals.css";
import { Providers } from "@/providers/Providers";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					crossOrigin="anonymous"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
					integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
					referrerPolicy="no-referrer"
					rel="stylesheet"
				/>
				<link href="https://atugatran.github.io/FontAwesome6Pro/css/all.min.css" rel="stylesheet" />
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
