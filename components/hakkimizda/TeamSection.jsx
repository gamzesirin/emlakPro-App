'use client'

export default function TeamSection({ teamMembers }) {
	// İsmin baş harflerini alma fonksiyonu
	const getInitials = (name) => {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('')
	}

	return (
		<section className="container mx-auto px-4 py-20">
			<h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">Profesyonel Ekibimiz</h2>
			<div className="grid md:grid-cols-3 gap-8">
				{teamMembers.map((member) => (
					<div
						key={member.id}
						className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center"
					>
						<div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
							{getInitials(member.name)}
						</div>
						<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{member.name}</h3>
						<p className="text-indigo-500 dark:text-indigo-400 text-sm mb-4">{member.position}</p>
						<p className="text-slate-500 dark:text-slate-400 text-sm">{member.description}</p>
					</div>
				))}
			</div>
		</section>
	)
}
