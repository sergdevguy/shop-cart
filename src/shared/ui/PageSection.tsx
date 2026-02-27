export type PageBlockProps = {
	children: React.ReactNode
}

export function PageSection({ children }: PageBlockProps) {
	return (
		<section className="relative overflow-hidden flex items-center py-24 sm:py-32">
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{children}
			</div>
		</section>
	)
}
