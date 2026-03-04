import { ProductsGrid } from '@/features/products/ui/ProductsGrid'
import { PageSection } from '@/shared/ui/PageSection'

export function ProductsPage() {
	return (
		<PageSection
			header="Новая коллекция"
			lead="Представляем новую коллекцию премиальных устройств. Добавьте в свою
						жизнь технологий!"
		>
			<ProductsGrid />
		</PageSection>
	)
}
