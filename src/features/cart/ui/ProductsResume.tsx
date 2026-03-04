import { CreditCard } from 'lucide-react'
import { useCartStore } from '../store'

export function ProductsResume() {
	const { totalPrice } = useCartStore()
	const total = totalPrice()

	return (
		<div className="sticky top-24 rounded-3xl border border-black/5 bg-zinc-50 p-8">
			<h2 className="mb-6 text-xl font-bold text-black">Расчет стоимости</h2>

			<div className="space-y-4">
				<div className="flex justify-between text-sm text-zinc-500">
					<span>Товар</span>
					<span className="font-medium text-black">${total.toFixed(2)}</span>
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

			<button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 text-sm font-bold text-white transition-transform hover:scale-103 active:scale-97">
				Оплатить
				<CreditCard size={18} />
			</button>
		</div>
	)
}
