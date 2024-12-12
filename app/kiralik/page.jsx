'use client'

import { useState } from 'react'
import FilterSection from '@/components/kiralik/filter-section'
import PropertyCard from '@/components/kiralik/property-card'
import { PROPERTIES } from '@/lib/data/rental-properties'

export default function KiralikPage() {
	const [filteredProperties, setFilteredProperties] = useState(PROPERTIES)

	const handleSearch = (filters) => {
		const filtered = PROPERTIES.filter((property) => {
			if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
				return false
			}

			const price = parseFloat(property.price.replace(/[.,]/g, ''))
			if (filters.minPrice && price < parseFloat(filters.minPrice)) {
				return false
			}
			if (filters.maxPrice && price > parseFloat(filters.maxPrice)) {
				return false
			}

			if (filters.propertyType && property.type.toLowerCase() !== filters.propertyType.toLowerCase()) {
				return false
			}

			return true
		})

		setFilteredProperties(filtered)
	}

	return (
		<div className="min-h-screen bg-slate-50 dark:bg-slate-900">
			<FilterSection onSearch={handleSearch} />

			<div className="container mx-auto px-4 py-8">
				{filteredProperties.length === 0 ? (
					<div className="text-center py-12">
						<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
							Aramanıza uygun kiralık emlak bulunamadı
						</h3>
						<p className="text-slate-500 dark:text-slate-400">
							Lütfen farklı filtreleme seçenekleri ile tekrar deneyin
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredProperties.map((property) => (
							<PropertyCard key={property.id} property={property} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}
