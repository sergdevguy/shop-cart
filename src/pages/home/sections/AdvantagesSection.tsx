import { fadeInLeft } from '@/shared/animations/fadeInLeft'
import { PageSection } from '@/shared/ui/PageSection'
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
		<PageSection
			header="Преимущества"
			mode="dark"
		>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
				{ADVANTAGES.map((feature, i) => (
					<motion.div
						key={i}
						{...fadeInLeft}
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
		</PageSection>
	)
}
