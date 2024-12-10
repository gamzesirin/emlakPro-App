'use client'

import { useEffect, useState } from 'react'

const partners = [
	{
		name: 'Google',
		logo: '/logos/google.svg'
	},
	{
		name: 'Lenovo',
		logo: '/logos/lenovo.svg'
	},
	{
		name: 'Samsung',
		logo: '/logos/samsung.svg'
	},
	{
		name: 'Spotify',
		logo: '/logos/spotify.svg'
	},
	{
		name: 'Slack',
		logo: '/logos/slack.svg'
	},
	// Sürekli kaydırma efekti için logoları tekrarlıyoruz
	{
		name: 'Google',
		logo: '/logos/google.svg'
	},
	{
		name: 'Lenovo',
		logo: '/logos/lenovo.svg'
	}
]

export default function Partners() {
	const [scrollPosition, setScrollPosition] = useState(0)

	useEffect(() => {
		const animationDuration = 20000 // 20 saniye
		let startTime
		let animationFrameId

		const animate = (timestamp) => {
			if (!startTime) startTime = timestamp
			const progress = timestamp - startTime

			// Sonsuz döngü için modulo kullanıyoruz
			const currentPosition = ((progress / animationDuration) * 100) % 100

			setScrollPosition(-currentPosition)

			animationFrameId = requestAnimationFrame(animate)
		}

		animationFrameId = requestAnimationFrame(animate)

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId)
			}
		}
	}, [])

	return (
		<section className="py-16 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
			<div className="container px-4 mx-auto">
				<div className="relative">
					<div
						className="flex items-center gap-16 whitespace-nowrap"
						style={{
							transform: `translateX(${scrollPosition}%)`,
							transition: 'transform 0.5s linear'
						}}
					>
						{partners.map((partner, index) => (
							<div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
								<img src={partner.logo} alt={partner.name} className="h-8 md:h-12 w-auto object-contain" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
