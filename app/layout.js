import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'EmlakPro - Hayalinizdeki Eve Ulaşmanın En Kolay Yolu',
	description: 'İzmir ve çevresindeki en seçkin gayrimenkul portföyü ile hayalinizdeki eve ulaşmanın en kolay yolu.'
}

export default function RootLayout({ children }) {
	return (
		<html lang="tr" suppressHydrationWarning className="scroll-smooth">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
			</head>
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
