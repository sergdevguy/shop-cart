import { motion } from 'motion/react'

export function PreviewSection() {
	return (
		<section className="relative overflow-hidden min-h-[calc(100vh-128px)] flex items-center py-24 sm:py-32 text-white ">
			<div className="relative mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					className="relative group"
				>
					{[...Array(4)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute top-4 left-[calc(50%-104px)] w-47 h-92 inset-0 rounded-md border border-zinc-950/20"
							initial={{ scaleX: 1, scaleY: 1, opacity: 0 }}
							whileInView={{ scaleX: 1.5, scaleY: 1.3, opacity: [0, 1, 0] }}
							viewport={{ once: true }}
							transition={{
								duration: 1.2,
								delay: i * 0.3,
								repeat: Infinity,
								ease: 'easeOut'
							}}
						/>
					))}

					<img
						src="/images/home/smartphone-preview.png"
						alt="Новинка смартфона"
						className="max-w-100"
					/>
				</motion.div>
			</div>
		</section>
	)
}
