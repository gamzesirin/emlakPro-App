'use client'

import HeroSection from '@/components/hakkimizda/HeroSection'
import MissionVisionSection from '@/components/hakkimizda/MissionVisionSection'
import TeamSection from '@/components/hakkimizda/TeamSection'
import ContactSection from '@/components/hakkimizda/ContactSection'

const teamMembers = [
	{
		id: 1,
		name: 'Ahmet Yılmaz',
		position: 'Genel Müdür',
		description: '15 yıllık gayrimenkul ve yönetim deneyimi',
		image: '/images/team/member1.jpg'
	},
	{
		id: 2,
		name: 'Ayşe Kaya',
		position: 'Satış Müdürü',
		description: '10 yıllık emlak danışmanlığı tecrübesi',
		image: '/images/team/member2.jpg'
	},
	{
		id: 3,
		name: 'Mehmet Demir',
		position: 'Kiralama Uzmanı',
		description: '8 yıllık kiralama ve portföy yönetimi deneyimi',
		image: '/images/team/member3.jpg'
	}
]

export default function HakkimizdaPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
			<HeroSection />
			<MissionVisionSection />
			<TeamSection teamMembers={teamMembers} />
			<ContactSection />
		</div>
	)
}
