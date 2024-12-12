'use client'

import { Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
	{
		content:
			'EmlakPro ile çalışmak, gayrimenkul alım-satım sürecimizi çok kolaylaştırdı. Profesyonel ve güvenilir bir ekip.',
		author: 'Ahmet Yılmaz',
		initials: 'AY',
		position: 'Müşteri',
		rating: 5
	},
	{
		content: 'İzmirdeki en iyi gayrimenkul danışmanlık hizmetini aldım. Her şey çok hızlı ve sorunsuz ilerledi.',
		author: 'Elif Demir',
		initials: 'ED',
		position: 'Müşteri',
		rating: 5
	},
	{
		content: 'EmlakPro ekibi, ihtiyaçlarımıza uygun en iyi seçenekleri sundu. Kesinlikle tavsiye ederim.',
		author: 'Mehmet Kaya',
		initials: 'MK',
		position: 'Müşteri',
		rating: 5
	}
]

export default function Testimonials() {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % testimonials.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [])

	return (
		<section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col items-center mb-12">
					<span className="text-indigo-600 font-medium mb-2">Müşteri Yorumları</span>
					<h2 className="text-3xl font-bold text-slate-900 dark:text-white">Müşterilerimiz Ne Diyor?</h2>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="relative overflow-hidden">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentSlide * 100}%)` }}
						>
							{testimonials.map((testimonial, index) => (
								<div key={index} className="w-full flex-shrink-0 px-4">
									<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm">
										<div className="flex items-center gap-1 text-amber-400 mb-6">
											{[...Array(testimonial.rating)].map((_, i) => (
												<Star key={i} className="w-5 h-5 fill-current" />
											))}
										</div>
										<blockquote className="text-lg text-slate-700 dark:text-slate-300 mb-6">
											{testimonial.content}
										</blockquote>
										<div className="flex items-center">
											<div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-semibold mr-4">
												{testimonial.initials}
											</div>
											<div>
												<div className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
												<div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.position}</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="flex justify-center gap-2 mt-8">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index)}
								className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
									currentSlide === index ? 'bg-indigo-600 w-8' : 'bg-slate-300 dark:bg-slate-600 hover:bg-indigo-400'
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
