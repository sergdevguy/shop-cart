import { motion } from 'motion/react'
import { fadeInLeft } from '../animations/fadeInLeft'

export type PageBlockProps = {
	children: React.ReactNode
	mode?: 'light' | 'dark'
	header?: string
	headerLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	lead?: string
}

export function PageSection({
	children,
	mode = 'light',
	header,
	headerLevel: HeaderTag = 'h2',
	lead
}: PageBlockProps) {
	function Header() {
		const MotionEl = motion(HeaderTag)
		return (
			<MotionEl
				{...fadeInLeft}
				className="mb-10 text-4xl sm:text-5xl font-bold text-center"
			>
				{header}
			</MotionEl>
		)
	}

	return (
		<section
			className={`relative overflow-hidden flex items-center py-24 sm:py-32 ${mode === 'dark' && 'text-white bg-linear-to-b from-[#141240] to-zinc-950'}`}
		>
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-22">
					{header && Header()}
					{lead && (
						<motion.p
							{...fadeInLeft}
							className="mx-auto mb-10 max-w-2xl text-lg text-center text-zinc-400"
						>
							{lead}
						</motion.p>
					)}
				</div>
				{children}
			</div>
		</section>
	)
}
