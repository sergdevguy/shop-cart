import { type Product } from '@/types/product'
import { ShoppingBasket, Star } from 'lucide-react'
import { useCartStore } from '../cart/store'

interface ProductCardProps {
	product: Product
	key?: string | number
}

export function ProductCard({ product }: ProductCardProps) {
	const addItem = useCartStore(state => state.addItem)
	// TODO нельзя купить больше чем есть в стоке
	// TODO анимации карточек сделать

	return (
		<div className="group relative flex flex-col overflow-hidden rounded-md border border-zinc-950/20 bg-white transition-all hover:shadow-lg">
			<div className="relative overflow-hidden bg-zinc-950">
				<img
					src={product.image}
					alt={product.name}
					className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-sm font-bold">
					<Star
						size={14}
						fill="#000000"
					/>
					{product.rating.toFixed(1)}
				</div>
			</div>

			<div className="flex flex-col p-5">
				<div className="mb-3 flex items-center justify-between">
					<span className="text-xs font-bold uppercase text-zinc-400">
						{product.category}
					</span>
					<span
						className={`text-sm font-bold ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}
					>
						{product.stock > 0 ? `в наличии ${product.stock}` : 'распродано'}
					</span>
				</div>
				<h3 className="mb-1 text-lg font-bold text-zinc-950">{product.name}</h3>
				<p className="mb-4 line-clamp-2 text-sm text-zinc-400">
					{product.description}
				</p>

				<div className="mt-auto flex items-center justify-between">
					<span className="text-xl font-bold text-zinc-950">
						${product.price.toFixed(2)}
					</span>
					{product.stock !== 0 && (
						<button
							onClick={() => addItem(product)}
							className="flex h-10 w-20 items-center justify-center rounded-md bg-zinc-950 text-white transition-all hover:scale-110 active:scale-95"
						>
							<ShoppingBasket size={20} />
						</button>
					)}
				</div>
			</div>
		</div>
	)
}
