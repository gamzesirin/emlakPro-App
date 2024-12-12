'use client'

import { Bath, BedDouble, Maximize, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function PropertyCard({ property }) {
	return (
		<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
			<div className="relative h-[224px]">
				<Image
					src={property.imageUrl}
					alt={property.title}
					width={300}
					height={256}
					className="w-full h-56 object-cover rounded-lg"
				/>
				<span className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
					{property.type}
				</span>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{property.title}</h3>
				<div className="flex items-center text-slate-500 dark:text-slate-400 mb-4">
					<MapPin className="w-4 h-4 mr-1" />
					{property.location}
				</div>
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
						{property.bedrooms && (
							<span className="flex items-center">
								<BedDouble className="w-4 h-4 mr-1" />
								{property.bedrooms}
							</span>
						)}
						{property.bathrooms && (
							<span className="flex items-center">
								<Bath className="w-4 h-4 mr-1" />
								{property.bathrooms}
							</span>
						)}
						<span className="flex items-center">
							<Maximize className="w-4 h-4 mr-1" />
							{property.area}m²
						</span>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{property.price} TL/ay</span>
					<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">Detaylar</button>
				</div>
			</div>
		</div>
	)
}
