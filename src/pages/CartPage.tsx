import { useCartStore } from '@/features/cart/store'
import { CreditCard, Minus, Plus, Trash2 } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router'

export function CartPage() {
	const { items, removeItem, updateQuantity, totalPrice, clearCart } =
		useCartStore()
	const total = totalPrice()

	if (items.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center px-4 text-center">
				<h2 className="mb-2 text-3xl font-bold">Корзина пуста</h2>
				<p className="mb-8 text-zinc-500">
					Посмотрите наши товары и выберите подходящие для себя!
				</p>
				<Link
					to="/products"
					className="rounded-md bg-zinc-950 px-8 py-4 text-md font-bold text-white transition-all hover:bg-zinc-950/80"
				>
					За покупками
				</Link>
			</div>
		)
	}

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="mb-15 text-5xl sm:text-7xl text-center font-extrabold">
				Ваша корзина
			</h1>

			<div className="mb-5 flex gap-3 items-center justify-center">
				<Link
					to="/products"
					className="px-3 py-2 text-sm rounded-md bg-zinc-950 text-white"
				>
					Продолжить покупки
				</Link>
				<button
					onClick={clearCart}
					className="px-3 py-2 text-sm rounded-md bg-zinc-950 text-white"
				>
					Очистить корзину
				</button>
			</div>

			<div className="grid gap-12 grid-cols-1 lg:grid-cols-12">
				<div className="lg:col-span-8">
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
													onClick={() =>
														updateQuantity(item.id, item.quantity - 1)
													}
													className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black shadow-sm transition-transform hover:scale-110 active:scale-95"
												>
													<Minus size={14} />
												</button>
												<span className="w-8 text-center text-sm font-bold">
													{item.quantity}
												</span>
												<button
													onClick={() =>
														updateQuantity(item.id, item.quantity + 1)
													}
													className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black shadow-sm transition-transform hover:scale-110 active:scale-95"
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
				</div>

				<div className="lg:col-span-4">
					<div className="sticky top-24 rounded-3xl border border-black/5 bg-zinc-50 p-8">
						<h2 className="mb-6 text-xl font-bold text-black">
							Расчет стоимости
						</h2>

						<div className="space-y-4">
							<div className="flex justify-between text-sm text-zinc-500">
								<span>Товар</span>
								<span className="font-medium text-black">
									${total.toFixed(2)}
								</span>
							</div>
							<div className="flex justify-between text-sm text-zinc-500">
								<span>Налог</span>
								<span className="font-medium text-black">
									${(total * 0.08).toFixed(2)}
								</span>
							</div>

							<div className="my-6 h-px bg-black/5" />

							<div className="flex justify-between text-lg font-bold text-black">
								<span>Сумма</span>
								<span>${(total * 1.08).toFixed(2)}</span>
							</div>
						</div>

						<button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
							Оплатить
							<CreditCard size={18} />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
