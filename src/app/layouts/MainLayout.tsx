import { Footer } from '@/widgets/footer/Footer'
import Header from '@/widgets/header/Header'
import { Outlet, ScrollRestoration } from 'react-router'
import { ScrollManager } from '../providers/ScrollManager'

export function MainLayout() {
	return (
		<>
			<ScrollManager />
			<div className="min-h-screen flex flex-col">
				<Header />
				<main className="flex flex-1 justify-center text-zinc-950">
					<ScrollRestoration />
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	)
}
