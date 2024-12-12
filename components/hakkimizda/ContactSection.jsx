'use client'

import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactSection() {
	return (
		<section className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-center gap-8 text-sm">
					<a
						href="tel:+902321234567"
						className="flex items-center text-slate-600 dark:text-slate-300 hover:text-indigo-500"
					>
						<Phone className="w-4 h-4 mr-2" />
						+90 232 123 45 67
					</a>
					<a
						href="mailto:info@emlakfirmaniz.com"
						className="flex items-center text-slate-600 dark:text-slate-300 hover:text-indigo-500"
					>
						<Mail className="w-4 h-4 mr-2" />
						info@emlakfirmaniz.com
					</a>
					<span className="flex items-center text-slate-600 dark:text-slate-300">
						<MapPin className="w-4 h-4 mr-2" />
						Alsancak, İzmir
					</span>
				</div>
			</div>
		</section>
	)
}
