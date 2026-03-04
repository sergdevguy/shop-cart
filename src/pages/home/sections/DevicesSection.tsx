import { fadeInLeft } from '@/shared/animations/fadeInLeft'
import { PageSection } from '@/shared/ui/PageSection'
import { motion } from 'motion/react'
import { Link } from 'react-router'

export function DevicesSection() {
	return (
		<PageSection
			header="Выберите свой девайс"
			lead="Мы выпустили новую линейку смартфонов отвечают последним требованиям
					по функциональности и дизайну. Next-OS позволяет получать доступ ко
					всем новым сервисам, улучшенный UX, меньшее потребление памяти и
					нагрев телефона. Несколько новых дизайнов и линеек под разные нужны и
					возможности, выберите премиум или эконом класс в зависимости от ваших
					требований и возможностей."
		>
			<div className="text-center">
				<motion.img
					{...fadeInLeft}
					src="/images/home/devices.png"
					alt="Превью устройств"
					className="max-w-full w-200 m-auto mb-6"
				/>
				<motion.p {...fadeInLeft}>
					Новый дизайн, новая операционная система и новый опыт!
				</motion.p>
				<motion.div
					{...fadeInLeft}
					className="mt-7 flex justify-center"
				>
					<Link
						to="/products"
						className="flex items-center gap-2 rounded-xl border border-zinc-950/80 bg-zinc-950/5 px-8 py-4 text-sm font-bold transition-transform hover:scale-103 active:scale-97"
					>
						Каталог смартфонов
					</Link>
				</motion.div>
			</div>
		</PageSection>
	)
}
