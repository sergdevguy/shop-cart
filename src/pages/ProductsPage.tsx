import { products } from '@/features/products/data'
import { ProductCard } from '@/features/products/ProductCart'
import { CircleQuestionMark, Search } from 'lucide-react'
import { useMemo, useState } from 'react'

// TODO добавить фильтр "в наличии",
// TODO All сделать на русском
export function ProductsPage() {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('All')

	const categories = [
		'All',
		'in stock',
		...new Set(products.map(p => p.category))
	]

	const filteredProducts = useMemo(() => {
		return products.filter(product => {
			const matchesSearch =
				product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.description.toLowerCase().includes(searchQuery.toLowerCase())
			const matchesCategory =
				selectedCategory === 'All' || product.category === selectedCategory
			return matchesSearch && matchesCategory
		})
	}, [searchQuery, selectedCategory])

	return (
		<div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
			<div className="mt-10 mb-20 text-center">
				<h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl">
					Новая коллекция
				</h1>
				<p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400">
					Представляем новую коллекцию премиальных устройств. Добавьте в свою
					жизнь технологий!
				</p>
			</div>

			<div>
				<div className="relative">
					<Search
						size={18}
						className="absolute top-3 left-3 text-zinc-400"
					/>
					<input
						type="text"
						placeholder="Найти устройство..."
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						className="h-10 pl-10 pr-4 border border-zinc-300 rounded-md bg-zinc-50 focus:border-black/20 focus:bg-white outline-none transition-all"
					/>
				</div>
				<div className="flex flex-wrap gap-2 mt-4 mb-10">
					{categories.map(category => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`rounded-md px-3 py-2 text-sm transition-all ${
								selectedCategory === category
									? 'bg-black text-white'
									: 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
							}`}
						>
							{category}
						</button>
					))}
				</div>
			</div>

			{filteredProducts.length > 0 ? (
				<div className="grid gap-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{filteredProducts.map(product => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
				</div>
			) : (
				<div className="flex flex-col items-center justify-center py-20 text-center">
					<div>
						<CircleQuestionMark size={48} />
					</div>
					<h3 className="text-xl">Ничего не нашлось</h3>
					<button
						onClick={() => {
							setSearchQuery('')
							setSelectedCategory('All')
						}}
						className="mt-6 px-3 py-2 text-sm font-bold text-white bg-zinc-950 rounded-md"
					>
						Очистить фильтры
					</button>
				</div>
			)}
		</div>
	)
}
