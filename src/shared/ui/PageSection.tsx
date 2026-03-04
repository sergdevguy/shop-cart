import { motion } from 'motion/react'
import { fadeInLeft } from '../animations/fadeInLeft'

export type PageBlockProps = {
	children: React.ReactNode
	mode?: 'light' | 'dark'
	header?: string
	headerLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	lead?: string
	className?: string
}

const MotionHeaders = {
	h1: motion.h1,
	h2: motion.h2,
	h3: motion.h3,
	h4: motion.h4,
	h5: motion.h5,
	h6: motion.h6
}

export function PageSection({
	children,
	mode = 'light',
	header,
	headerLevel = 'h2',
	lead,
	className
}: PageBlockProps) {
	const MotionHeader = MotionHeaders[headerLevel]

	return (
		<section
			className={`relative flex w-full py-24 sm:py-32 ${mode === 'dark' ? 'text-white bg-[linear-gradient(to_bottom,#09090b_0%,#141240_50%,#09090b_100%)]' : ''} ${className ? className : ''}`}
		>
			<div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				{(header || lead) && (
					<div className="mb-22">
						{header && (
							<MotionHeader
								{...fadeInLeft}
								className="mb-10 text-4xl sm:text-5xl font-bold text-center"
							>
								{header}
							</MotionHeader>
						)}
						{lead && (
							<motion.p
								{...fadeInLeft}
								className="mx-auto mb-10 max-w-2xl text-lg text-center text-zinc-400"
							>
								{lead}
							</motion.p>
						)}
					</div>
				)}
				{children}
			</div>
		</section>
	)
}
