import { type Product } from '@/types/product'
import { Minus, Plus, ShoppingBasket, Star } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useCartStore } from '../../cart/store'

interface ProductCardProps {
	product: Product
	key?: string | number
}

export function ProductCard({ product }: ProductCardProps) {
	const addItem = useCartStore(state => state.addItem)
	const quantity = useCartStore(state => state.itemQuantity(product.id))
	const updateQuantity = useCartStore(state => state.updateQuantity)

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

					{product.stock > 0 && (
						<motion.div layout>
							<AnimatePresence mode="wait">
								{quantity > 0 ? (
									<motion.div
										key="quantity-controls"
										initial={{
											rotateY: -90,
											transformPerspective: 200,
											transformOrigin: 'center'
										}}
										animate={{
											rotateY: 0,
											transformPerspective: 200,
											transformOrigin: 'center'
										}}
										exit={{
											rotateY: 90,
											transformPerspective: 200,
											transformOrigin: 'center'
										}}
										transition={{ duration: 0.2 }}
										className="flex items-center gap-3 rounded-lg border border-black/5 bg-zinc-950 p-1"
									>
										<button
											onClick={() => updateQuantity(product.id, quantity - 1)}
											className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black shadow-sm transition-transform hover:scale-103 active:scale-97"
										>
											<Minus size={14} />
										</button>
										<span className="w-6 text-center text-sm font-bold text-white">
											{quantity}
										</span>
										<motion.button
											onClick={() => updateQuantity(product.id, quantity + 1)}
											disabled={quantity === product.stock}
											className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black shadow-sm transition-all not-disabled:hover:scale-103 not-disabled:active:scale-97 disabled:opacity-20"
										>
											<Plus size={14} />
										</motion.button>
									</motion.div>
								) : (
									<motion.button
										key="add-button"
										initial={{
											rotateY: -90,
											transformPerspective: 200,
											transformOrigin: 'center'
										}}
										animate={{
											rotateY: 0,
											transformPerspective: 200,
											transformOrigin: 'center'
										}}
										exit={{
											rotateY: 90,
											transformPerspective: 200,
											transformOrigin: 'center'
										}}
										transition={{ duration: 0.2 }}
										onClick={() => addItem(product)}
										className="flex h-10.5 w-30.5 items-center justify-center rounded-md bg-zinc-950 text-white"
									>
										<ShoppingBasket size={20} />
									</motion.button>
								)}
							</AnimatePresence>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	)
}
