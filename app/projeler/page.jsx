'use client'

import HeroSection from '@/components/projeler/HeroSection'
import ProjectsGrid from '@/components/projeler/ProjectsGrid'

const projects = [
	{
		id: 1,
		title: 'Marina Residence',
		location: 'Karşıyaka, İzmir',
		description: 'Deniz manzaralı lüks konut projesi, modern yaşamın tüm konforunu sunar.',
		status: 'Tamamlandı',
		units: 120,
		completionDate: '2023',
		imageUrl: '/images/ev1.jpg'
	},
	{
		id: 2,
		title: 'Green Valley',
		location: 'Bornova, İzmir',
		description: 'Yeşil alanlarıyla öne çıkan, sürdürülebilir yaşam kompleksi.',
		status: 'Tamamlandı',
		units: 240,
		completionDate: '2022',
		imageUrl: '/images/ev4.jpg'
	},
	{
		id: 3,
		title: 'Business Plaza',
		location: 'Alsancak, İzmir',
		description: 'Modern ofis ve iş merkezi, şehrin kalbinde prestijli bir yatırım.',
		status: 'Tamamlandı',
		units: 80,
		completionDate: '2023',
		imageUrl: '/images/ev3.jpg'
	},
	{
		id: 4,
		title: 'Villa',
		location: 'Akhisar, Manisa',
		description: 'Yeşil alanlarıyla öne çıkan, sürdürülebilir yaşam kompleksi.',
		status: 'Tamamlandı',
		units: 240,
		completionDate: '2022',
		imageUrl: '/images/ev5.jpg'
	}
]

export default function ProjelerPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
			<HeroSection />
			<ProjectsGrid projects={projects} />
		</div>
	)
}
