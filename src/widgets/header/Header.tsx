import { useCartStore } from '@/features/cart/store'
import { Home, ShoppingBasket, Smartphone } from 'lucide-react'
import { Link, useLocation } from 'react-router'

export default function Header() {
	const location = useLocation()
	const totalItems = useCartStore(state => state.totalItems())

	const navItems = [
		{ name: 'Домой', path: '/', icon: Home },
		{ name: 'Товары', path: '/products', icon: Smartphone }
	]

	return (
		<header className="sticky top-0 z-100 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
			<div className="h-16 max-w-7xl mx-auto flex justify-between px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-2">
					<Link
						to="/"
						className="flex items-center"
					>
						<div className="flex h-10 w-10 items-center justify-center">
							<img
								src="/logo.svg"
								alt="Логотип компании Shop Cart"
							/>
						</div>
						<span className="text-xl font-bold text-black">Shop Cart</span>
					</Link>
				</div>

				<nav className="flex items-center gap-6 sm:gap-8">
					{navItems.map(item => {
						const Icon = item.icon
						const isActive = location.pathname === item.path
						return (
							<Link
								key={item.path}
								to={item.path}
								className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-black ${isActive ? 'text-black' : 'text-zinc-500'}`}
							>
								<Icon className="w-6 h-6 sm:w-4.5 sm:h-4.5" />
								<span className="hidden sm:flex">{item.name}</span>
							</Link>
						)
					})}
					<Link
						to="/cart"
						className="relative flex h-10 w-10 items-center justify-center rounded-sm bg-zinc-950 hover:bg-zinc-800"
					>
						<ShoppingBasket className="w-10 text-white" />
						{totalItems > 0 && (
							<span className="absolute -right-2 -top-2 h-6 w-6 flex items-center justify-center text-[12px] rounded-full font-bold text-white bg-black">
								{totalItems}
							</span>
						)}
					</Link>
				</nav>
			</div>
		</header>
	)
}
