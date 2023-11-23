import './globals.tail.css'
import NavBar from '@/components/ui/Navbar'

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<body className="bg-gradient-to-tr overflow-x-hidden min-w-screen from-zinc-950 via-stone-800 to-neutral-700 flex min-h-screen flex-col items-center justify-between">
			<main className="p-4 py-24 gap-6 w-full lg:w-[55%]">
				<NavBar />
				{children}
			</main>
		</body>
	)
}
