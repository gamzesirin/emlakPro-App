'use client'

import { Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
	{
		content:
			"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'.",
		author: 'Calvin Carlo',
		position: 'Manager',
		image: '/images/ev1.jpg'
	},
	{
		content:
			"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'.",
		author: 'Christa Smith',
		position: 'Designer',
		image: '/images/ev1.jpg'
	},
	{
		content:
			"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'.",
		author: 'Jemina CLone',
		position: 'Developer',
		image: '/images/ev1.jpg'
	}
]

export default function Testimonials() {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % testimonials.length)
		}, 5000) // Her 5 saniyede bir değişir

		return () => clearInterval(timer)
	}, [])

	return (
		<section className="py-20 bg-slate-50 dark:bg-slate-800">
			<div className="container px-4 mx-auto">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">What Our Users Say</h2>
					<p className="text-slate-500 dark:text-slate-400">
						Start working with Techwind that can provide everything you need to generate awareness, drive traffic,
						connect.
					</p>
				</div>

				<div className="relative max-w-3xl mx-auto">
					<div className="overflow-hidden">
						<div
							className="transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentSlide * 100}%)` }}
						>
							<div className="flex">
								{testimonials.map((testimonial, index) => (
									<div key={index} className="w-full flex-shrink-0 bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm">
										<div className="flex text-amber-400 dark:text-amber-300 mb-4">
											{[...Array(5)].map((_, i) => (
												<Star key={i} className="w-5 h-5 fill-current" />
											))}
										</div>
										<p className="text-slate-500 dark:text-slate-400 mb-6">{testimonial.content}</p>
										<div className="flex items-center">
											<img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
											<div>
												<h4 className="font-semibold text-slate-900 dark:text-slate-100">{testimonial.author}</h4>
												<p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.position}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Dots */}
					<div className="flex justify-center space-x-2 mt-6">
						{testimonials.map((_, index) => (
							<button
								key={index}
								className={`w-2 h-2 rounded-full transition-all ${
									currentSlide === index ? 'bg-indigo-600 w-4' : 'bg-slate-300 dark:bg-slate-600'
								}`}
								onClick={() => setCurrentSlide(index)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
