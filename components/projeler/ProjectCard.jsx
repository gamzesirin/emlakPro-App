'use client'

import { MapPin, Home, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function ProjectCard({ project }) {
	return (
		<div className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
			<div className="relative aspect-[4/3] overflow-hidden">
				<Image
					src={project.imageUrl}
					alt={project.title}
					width={800}
					height={600}
					className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-lg"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
				<span className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
					{project.status}
				</span>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
					{project.title}
				</h3>
				<div className="flex items-center text-slate-600 dark:text-slate-300 mb-4">
					<MapPin className="w-4 h-4 mr-2" />
					{project.location}
				</div>
				<div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
					<span className="flex items-center">
						<Home className="w-4 h-4 mr-1" />
						{project.units} Ünite
					</span>
					<span className="flex items-center">
						<Calendar className="w-4 h-4 mr-1" />
						{project.completionDate}
					</span>
				</div>
				<p className="text-slate-600 dark:text-slate-300 text-sm mb-6">{project.description}</p>
				<Button className="w-full bg-indigo-600/90 hover:bg-indigo-600 transition-colors">Detayları Gör</Button>
			</div>
		</div>
	)
}
