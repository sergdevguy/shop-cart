import type { Product } from '@/types/product'

export const products: Product[] = [
	{
		id: '1',
		name: 'GlassPhone X1',
		description:
			'Полностью прозрачный корпус из закаленного стекла. 5G, 256GB.',
		price: 8999,
		category: 'glass',
		image: '/images/products/smartphone-1.png',
		rating: 4.9,
		stock: 7
	},
	{
		id: '2',
		name: 'Crystal S',
		description: 'Матовое стекло с эффектом кристалла. Тройная камера 108 МП.',
		price: 7499,
		category: 'glass',
		image: '/images/products/smartphone-2.png',
		rating: 4.7,
		stock: 0
	},
	{
		id: '3',
		name: 'Hologram Pro',
		description: 'Корпус с голографическим эффектом, меняет цвет под углом.',
		price: 11999,
		category: 'holographic',
		image: '/images/products/smartphone-3.png',
		rating: 5.0,
		stock: 3
	},
	{
		id: '4',
		name: 'Prism Glass',
		description: 'Стеклянный корпус с призматическим покрытием. 512GB.',
		price: 9999,
		category: 'holographic',
		image: '/images/products/smartphone-4.png',
		rating: 4.8,
		stock: 9
	},
	{
		id: '5',
		name: 'Carbon Glass X',
		description: 'Стекло с карбоновыми вставками. Сверхлегкий корпус.',
		price: 10999,
		category: 'carbon',
		image: '/images/products/smartphone-5.png',
		rating: 4.9,
		stock: 5
	},
	{
		id: '6',
		name: 'Carbon Lite',
		description: 'Текстурированное стекло с карбоновым рисунком. 6.7" AMOLED.',
		price: 6499,
		category: 'carbon',
		image: '/images/products/smartphone-6.png',
		rating: 4.6,
		stock: 18
	},
	{
		id: '7',
		name: 'Titan Pro Max',
		description: 'Титановая рамка со стеклянной задней панелью. Premium-класс.',
		price: 14999,
		category: 'titanium',
		image: '/images/products/smartphone-7.png',
		rating: 5.0,
		stock: 0
	},
	{
		id: '8',
		name: 'Titan Ultra',
		description: 'Самый тонкий титановый корпус. Керамическое стекло.',
		price: 13999,
		category: 'titanium',
		image: '/images/products/smartphone-8.png',
		rating: 4.9,
		stock: 4
	},
	{
		id: '9',
		name: 'GlassPhone X2',
		description: 'Новое поколение. Полностью прозрачный с подсветкой.',
		price: 9999,
		category: 'glass',
		image: '/images/products/smartphone-9.png',
		rating: 4.8,
		stock: 6
	},
	{
		id: '10',
		name: 'Hologram Air',
		description: 'Голографический дисплей с эффектом 3D без очков.',
		price: 12999,
		category: 'holographic',
		image: '/images/products/smartphone-10.png',
		rating: 4.9,
		stock: 8
	},
	{
		id: '11',
		name: 'Titan Edition',
		description: 'Лимитированная серия с гравировкой. Титан + стекло.',
		price: 15999,
		category: 'titanium',
		image: '/images/products/smartphone-11.png',
		rating: 5.0,
		stock: 1
	}
]
