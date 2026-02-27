import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const items = [
	{
		id: 1,
		label: 'Titan Edition',
		image: '/images/products/smartphone-11.png'
	},
	{
		id: 2,
		label: 'Carbon Lite',
		image: '/images/products/smartphone-6.png'
	},
	{
		id: 3,
		label: 'Hologram Pro',
		image: '/images/products/smartphone-3.png'
	},
	{
		id: 4,
		label: 'Prism Glass',
		image: '/images/products/smartphone-4.png'
	},
	{
		id: 5,
		label: 'Titan Ultra',
		image: '/images/products/smartphone-8.png'
	}
]

const ITEM_WIDTH = 400
const GAP = 30

export function PreviewSection() {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end']
	})

	// Move from first item centered to last item centered
	const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP)
	const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

	return (
		<div>
			<section className="my-20 text-center">
				<h3 className="text-5xl font-bold">Новая серия!</h3>
			</section>

			<div
				ref={containerRef}
				className="relative h-[300vh]"
			>
				<div className="sticky-wrapper">
					<motion.div
						className="gallery"
						style={{ x }}
					>
						{items.map(item => (
							<div
								key={item.id}
								className="gallery-item"
								style={
									{
										'--item-image': `url(${item.image})`
									} as React.CSSProperties
								}
							>
								<div className="item-content">
									<h2>{item.label}</h2>
								</div>
							</div>
						))}
					</motion.div>
				</div>

				<StyleSheet />
			</div>
		</div>
	)
}

function StyleSheet() {
	return (
		<style>{`
            .sticky-wrapper {
                position: sticky;
                top: 0;
                height: 100vh;
                width: 400px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                overflow: visible;
            }

            .gallery {
                display: flex;
                gap: 30px;
                will-change: transform;
            }

            .gallery-item {
                flex-shrink: 0;
                width: 400px;
                height: 500px;
                border-radius: 12px;
                position: relative;
                overflow: hidden;
                background-image: var(--item-image);
                background-size: cover;
                background-position: center;
            }

            .gallery-item::before {
                content: "";
                position: absolute;
                inset: 0;
                background: linear-gradient(
                    to bottom,
                    transparent 70%,
                    #000000
                );
                mix-blend-mode: multiply;
            }

            .item-content {
                position: absolute;
                bottom: 30px;
                left: 30px;
                z-index: 1;
            }

            .gallery-item h2 {
                font-size: 28px;
                font-weight: 600;
                color: #f5f5f5;
                margin: 0;
            }

            @media (max-width: 600px) {
                .sticky-wrapper {
                    width: 280px;
                }

                .gallery {
                    gap: 15px;
                }

                .gallery-item {
                    width: 280px;
                    height: 350px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .gallery {
                    transform: none !important;
                }
                .scroll-container {
                    height: auto;
                }
                .sticky-wrapper {
                    position: relative;
                    height: auto;
                    width: 100%;
                    overflow-x: auto;
                    padding: 50px 0;
                }
            }
        `}</style>
	)
}
