import { HomePage } from '@/pages/home/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { MainLayout } from './layouts/MainLayout'

const router = createBrowserRouter([
	{
		path: '/',
		Component: MainLayout,
		children: [
			{
				index: true,
				Component: HomePage
			},
			{
				path: 'products',
				lazy: async () => {
					const { ProductsPage } = await import('@/pages/ProductsPage')
					return { Component: ProductsPage }
				}
			},
			{
				path: 'cart',
				lazy: async () => {
					const { CartPage } = await import('@/pages/CartPage')
					return { Component: CartPage }
				}
			}
		]
	}
])

export function App() {
	return <RouterProvider router={router} />
}
