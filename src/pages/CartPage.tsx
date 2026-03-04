import { useCartStore } from '@/features/cart/store'
import { ProductsGroup } from '@/features/cart/ui/ProductsGroup'
import { ProductsResume } from '@/features/cart/ui/ProductsResume'
import { PageSection } from '@/shared/ui/PageSection'
import { Link } from 'react-router'

export function CartPage() {
	const { items, clearCart } = useCartStore()

	if (items.length === 0) {
		return (
			<div className="flex flex-col justify-center px-4 text-center">
				<h2 className="mb-2 text-3xl font-bold">Корзина пуста</h2>
				<p className="mb-8 text-zinc-500">
					Посмотрите наши товары и выберите подходящие для себя!
				</p>
				<Link
					to="/products"
					className="rounded-md bg-zinc-950 px-8 py-4 text-md font-bold text-white transition-transform hover:scale-103 active:scale-97"
				>
					За покупками
				</Link>
			</div>
		)
	}

	return (
		<PageSection header="Ваша корзина">
			<div className="mb-5 flex gap-3 items-center justify-center">
				<Link
					to="/products"
					className="px-3 py-2 text-sm rounded-md bg-zinc-950 text-white transition-transform hover:scale-103 active:scale-97"
				>
					Продолжить покупки
				</Link>
				<button
					onClick={clearCart}
					className="px-3 py-2 text-sm rounded-md bg-zinc-950 text-white transition-transform hover:scale-103 active:scale-97"
				>
					Очистить корзину
				</button>
			</div>

			<div className="grid gap-12 grid-cols-1 lg:grid-cols-12">
				<div className="lg:col-span-8">
					<ProductsGroup />
				</div>

				<div className="lg:col-span-4">
					<ProductsResume />
				</div>
			</div>
		</PageSection>
	)
}
