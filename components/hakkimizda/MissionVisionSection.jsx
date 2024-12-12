'use client'

import { Target, Award } from 'lucide-react'

export default function MissionVisionSection() {
	return (
		<section className="container mx-auto px-4 py-20">
			<div className="grid md:grid-cols-2 gap-12">
				<div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
					<div className="flex items-center mb-6">
						<Target className="w-8 h-8 text-indigo-600 mr-4" />
						<h2 className="text-3xl font-bold text-slate-900 dark:text-white">Misyonumuz</h2>
					</div>
					<p className="text-slate-600 dark:text-slate-300 leading-relaxed">
						Müşterilerimize en doğru gayrimenkul yatırımlarını yapmaları konusunda rehberlik etmek ve sektörde güvenilir
						bir danışmanlık hizmeti sunmak.
					</p>
				</div>

				<div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
					<div className="flex items-center mb-6">
						<Award className="w-8 h-8 text-indigo-600 mr-4" />
						<h2 className="text-3xl font-bold text-slate-900 dark:text-white">Vizyonumuz</h2>
					</div>
					<p className="text-slate-600 dark:text-slate-300 leading-relaxed">
						Türkiyenin en güvenilir ve tercih edilen gayrimenkul danışmanlık şirketi olmak ve sektörde yenilikçi
						çözümler sunmak.
					</p>
				</div>
			</div>
		</section>
	)
}
