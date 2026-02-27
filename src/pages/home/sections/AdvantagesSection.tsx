import { BadgeDollarSign, Drone, Origami } from 'lucide-react'
import { motion } from 'motion/react'

const ADVANTAGES = [
	{
		icon: Origami,
		title: 'Оригинальные',
		desc: 'От признанного и лучшего производителя смартфонов.'
	},
	{
		icon: Drone,
		title: 'Доставка',
		desc: 'Доставим да вашего пункта приема личных заказов.'
	},
	{
		icon: BadgeDollarSign,
		title: 'Экосистема',
		desc: 'Бесплатные сервисы на 3 месяца и кэшбек 10% через 6 месяцев.'
	}
]

export function AdvantagesSection() {
	return (
		<section className="relative overflow-hidden py-24 sm:py-32 bg-zinc-950">
			<div className="absolute inset-0 opacity-20">
				<div className="absolute inset-0 bg-linear-to-b from-zinc-950 to-[#4f46e5]" />
			</div>
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{ADVANTAGES.map((feature, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ delay: i * 0.1 }}
							className="flex flex-col items-center text-center p-8 rounded-3xl border border-black/5 bg-zinc-50"
						>
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
								<feature.icon size={24} />
							</div>
							<h3 className="mb-2 text-xl font-bold text-black">
								{feature.title}
							</h3>
							<p className="text-sm text-zinc-500">{feature.desc}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
