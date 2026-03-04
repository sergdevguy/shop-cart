import { fadeInLeft } from '@/shared/animations/fadeInLeft'
import { PageSection } from '@/shared/ui/PageSection'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const items = [
	{
		id: 1,
		label: 'Titan Edition',
		image: '/images/products/smartphone-11.png',
		specs: [
			'6.7" Super Retina',
			'5000 мАч',
			'A16 Bionic',
			'256 ГБ',
			'48 МП камера',
			'5G'
		]
	},
	{
		id: 2,
		label: 'Carbon Lite',
		image: '/images/products/smartphone-6.png',
		specs: [
			'6.1" OLED',
			'4500 мАч',
			'Dimensity 9200',
			'128 ГБ',
			'50 МП камера',
			'5G'
		]
	},
	{
		id: 3,
		label: 'Hologram Pro',
		image: '/images/products/smartphone-7.png',
		specs: [
			'6.9" LTPO 120Hz',
			'5500 мАч',
			'Snapdragon 8 Gen 3',
			'512 ГБ',
			'108 МП камера',
			'Wi-Fi 7'
		]
	},
	{
		id: 4,
		label: 'Prism Glass',
		image: '/images/products/smartphone-2.png',
		specs: [
			'6.5" AMOLED',
			'4800 мАч',
			'Tensor G3',
			'256 ГБ',
			'64 МП камера',
			'Беспроводная зарядка'
		]
	},
	{
		id: 5,
		label: 'Titan Ultra',
		image: '/images/products/smartphone-1.png',
		specs: [
			'6.8" Dynamic AMOLED',
			'6000 мАч',
			'A17 Pro',
			'1 ТБ',
			'200 МП камера',
			'Спутниковая связь'
		]
	}
]

const ITEM_WIDTH = 400 // 280
const GAP = 30 // 15

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
		<PageSection className="py-0! before:content-['*'] before:absolute before:-left-2 before:block before:w-full before:h-25 before:z-1 before:bg-[linear-gradient(to_bottom,#ffffff_80%,transparent_100%)]">
			<div>
				<motion.h2
					{...fadeInLeft}
					className="absolute top-30 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl font-bold text-center text-white z-1"
				>
					Новинки
				</motion.h2>
			</div>
			<div className="relative">
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
										{item.specs.map((s, i) => (
											<div
												key={i}
												className="item-spec"
											>
												{s}
											</div>
										))}
									</div>
								</div>
							))}
						</motion.div>
					</div>

					<StyleSheet />
				</div>
			</div>
		</PageSection>
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
                background: linear-gradient(90deg, white 0%, black 5% 95%, white 100%)
            }

            .gallery {
                display: flex;
                gap: 30px;
                will-change: transform;
                margin-top: 150px;
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
                mix-blend-mode: multiply;
            }

            .item-content {
                position: absolute;
                bottom: 30px;
                left: 30px;
                z-index: 1;
            }

            .item-spec {
                margin: 5px 0;
                padding: 3px 10px;
                border-radius: 5px;
                background: rgba(0, 0, 0, 0.2);
                color: #ffffff;
            }

            .gallery-item h2 {
                font-size: 28px;
                font-weight: 600;
                color: #ffffff;
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
