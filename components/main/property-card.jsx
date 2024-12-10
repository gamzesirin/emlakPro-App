import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'

export default function PropertyCard({ property }) {
	return (
		<div className="group relative overflow-hidden rounded-lg hover:shadow-lg transition-all duration-500">
			<div className="relative h-[240px]">
				<Image
					src={property.imageUrl}
					alt={property.title}
					fill
					className="object-cover group-hover:scale-110 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
				<span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
					{property.price} TL
				</span>
			</div>

			<div className="p-6">
				<div className="pb-6">
					<h3 className="text-lg font-medium hover:text-primary">{property.title}</h3>
					<p className="text-slate-400 text-sm mt-2">{property.location}</p>
				</div>

				<div className="flex items-center justify-between pt-4 border-t border-slate-100">
					<span className="flex items-center text-slate-400 text-sm">
						<i className="uil uil-bed-double me-2" /> {property.bedrooms} Yatak
					</span>
					<span className="flex items-center text-slate-400 text-sm">
						<i className="uil uil-bath me-2" /> {property.bathrooms} Banyo
					</span>
					<span className="flex items-center text-slate-400 text-sm">
						<i className="uil uil-square-full me-2" /> {property.area}m²
					</span>
				</div>
			</div>
		</div>
	)
}
