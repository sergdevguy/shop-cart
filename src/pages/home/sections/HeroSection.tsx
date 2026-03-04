import { PageSection } from '@/shared/ui/PageSection'
import { motion } from 'motion/react'
import { Link } from 'react-router'

export function HeroSection() {
	return (
		<PageSection
			mode="dark"
			className="min-h-[calc(100vh-128px)] items-center"
		>
			<div className="">
				<div className="flex flex-col items-center text-center">
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
					>
						<h1 className="mb-10 text-5xl font-extrabold tracking-tight sm:text-7xl">
							Будущее <span className="text-zinc-400">смартфонов</span>{' '}
							наступило
						</h1>
						<p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400">
							Новые технологии и фантастический дизайн уже здесь. Выберите для
							себя свой стиль, подходящий для вашего личного путешествия по
							новым реальностям.
						</p>
						<div className="flex justify-center">
							<Link
								to="/products"
								className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-103 active:scale-97"
							>
								Каталог смартфонов
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</PageSection>
	)
}
