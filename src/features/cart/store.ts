import type { CartItem, Product } from '@/types/product'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartState {
	items: CartItem[]
	addItem: (product: Product) => void
	removeItem: (productId: string) => void
	updateQuantity: (productId: string, quantity: number) => void
	clearCart: () => void
	totalItems: () => number
	totalPrice: () => number
	itemQuantity: (pruductId: string) => number
}

export const useCartStore = create<CartState>()(
	persist(
		(set, get) => ({
			items: [],
			addItem: product => {
				const items = get().items
				const existingItem = items.find(item => item.id === product.id)

				if (existingItem) {
					get().updateQuantity(existingItem.id, existingItem.quantity + 1)
				} else {
					set({ items: [...items, { ...product, quantity: 1 }] })
				}
			},
			removeItem: productId => {
				set({ items: get().items.filter(item => item.id !== productId) })
			},
			updateQuantity: (productId, quantity) => {
				if (quantity <= 0) {
					get().removeItem(productId)
					return
				}
				set({
					items: get().items.map(item => {
						if (item.id === productId) {
							const newQuantity = quantity >= item.stock ? item.stock : quantity
							return { ...item, quantity: newQuantity }
						} else {
							return item
						}
					})
				})
			},
			clearCart: () => set({ items: [] }),
			totalItems: () =>
				get().items.reduce((acc, item) => acc + item.quantity, 0),
			totalPrice: () =>
				get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
			itemQuantity: productId =>
				get().items.find(item => item.id === productId)?.quantity || 0
		}),
		{
			name: 'shopcart-cart-storage'
		}
	)
)
