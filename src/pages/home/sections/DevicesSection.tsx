import { PageSection } from '@/shared/ui/PageSection'
import { motion } from 'motion/react'
import { Link } from 'react-router'

export function DevicesSection() {
	return (
		<PageSection>
			<div className="text-center">
				<motion.h3
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					className="mb-10 text-5xl font-bold"
				>
					Выберите свой девайс
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400"
				>
					Мы выпустили новую линейку смартфонов отвечают последним требованиям
					по функциональности и дизайну. Next-OS позволяет получать доступ ко
					всем новым сервисам, улучшенный UX, меньшее потребление памяти и
					нагрев телефона. Несколько новых дизайнов и линеек под разные нужны и
					возможности, выберите премиум или эконом класс в зависимости от ваших
					требований и возможностей.
				</motion.p>
				<motion.img
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: '-200px' }}
					src="/images/home/devices.png"
					alt="Превью устройств"
					className="max-w-full w-200 m-auto mb-6"
				/>
				<motion.p
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: '-100px' }}
				>
					Новый дизайн, новая операционная система и новый опыт!
				</motion.p>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					className="mt-7 flex justify-center"
				>
					<Link
						to="/products"
						className="flex items-center gap-2 rounded-xl border border-zinc-950/80 bg-zinc-950/5 px-8 py-4 text-sm font-bold transition-colors hover:bg-white"
					>
						Каталог смартфонов
					</Link>
				</motion.div>
			</div>
		</PageSection>
	)
}
