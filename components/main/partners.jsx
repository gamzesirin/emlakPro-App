export default function Partners() {
	const partners = [
		{
			name: 'Google',
			category: 'Teknoloji Partneri',
			description: 'Dijital altyapı çözümleri'
		},
		{
			name: 'Apple',
			category: 'Mobil Partneri',
			description: 'iOS uygulama desteği'
		},
		{
			name: 'Amazon',
			category: 'Cloud Partneri',
			description: 'Sunucu altyapı hizmetleri'
		},
		{
			name: 'Meta',
			category: 'Pazarlama Partneri',
			description: 'Dijital pazarlama çözümleri'
		}
	]

	return (
		<section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col items-center mb-12">
					<span className="text-indigo-600 font-medium mb-2">Güvenilir İş Ortaklarımız</span>
					<h2 className="text-3xl font-bold text-slate-900 dark:text-white">Sektör Liderleriyle Çalışıyoruz</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{partners.map((partner, index) => (
						<div
							key={index}
							className="group p-8 bg-white dark:bg-slate-800 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-none dark:hover:bg-slate-700"
						>
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
									{partner.name}
								</h3>
								<span className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-slate-700 flex items-center justify-center">
									<span className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-400" />
								</span>
							</div>
							<span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2 block">
								{partner.category}
							</span>
							<p className="text-sm text-slate-500 dark:text-slate-400">{partner.description}</p>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<span className="inline-block px-4 py-2 bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full">
						+10 Global İş Ortağı
					</span>
				</div>
			</div>
		</section>
	)
}
