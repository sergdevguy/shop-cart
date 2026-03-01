import { useEffect } from 'react'
import { useLocation } from 'react-router'

export function ScrollManager() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}
