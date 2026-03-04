import { Minus, Plus, Trash2 } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useCartStore } from '../store'

export function ProductsGroup() {
	const { items, removeItem, updateQuantity } = useCartStore()

	return (
		<div className="flex flex-col gap-6">
			<AnimatePresence mode="popLayout">
				{items.map(item => (
					<motion.div
						key={item.id}
						layout
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -30 }}
						className="flex flex-col gap-4 rounded-md border border-black/40 bg-white p-4 sm:flex-row sm:items-center"
					>
						<div className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-zinc-950">
							<img
								src={item.image}
								alt={item.name}
								className="h-full w-full object-cover"
							/>
						</div>

						<div className="flex flex-1 flex-col">
							<div className="flex items-start justify-between">
								<div>
									<h3 className="font-bold">{item.name}</h3>
									<p className="text-xs text-zinc-500">{item.category}</p>
								</div>
								<button
									onClick={() => removeItem(item.id)}
									className="text-zinc-400 hover:text-red-500"
								>
									<Trash2 size={20} />
								</button>
							</div>

							<div className="mt-4 flex items-center justify-between">
								<div className="flex items-center gap-3 rounded-lg border border-black/5 bg-zinc-50 p-1">
									<button
										onClick={() => updateQuantity(item.id, item.quantity - 1)}
										className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black shadow-sm transition-transform hover:scale-103 active:scale-97"
									>
										<Minus size={14} />
									</button>
									<span className="w-8 text-center text-sm font-bold">
										{item.quantity}
									</span>
									<button
										onClick={() => updateQuantity(item.id, item.quantity + 1)}
										className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black shadow-sm transition-transform hover:scale-103 active:scale-97"
									>
										<Plus size={14} />
									</button>
								</div>
								<span className="font-bold text-black">
									${(item.price * item.quantity).toFixed(2)}
								</span>
							</div>
						</div>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}
