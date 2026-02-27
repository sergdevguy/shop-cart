import { Footer } from '@/widgets/footer/Footer'
import Header from '@/widgets/header/Header'
import { Outlet } from 'react-router'

export function MainLayout() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex flex-1 justify-center text-zinc-950">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
