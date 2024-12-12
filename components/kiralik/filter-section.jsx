'use client'

import { useState } from 'react'
import { Search, MapPin } from 'lucide-react'

export default function FilterSection({ onSearch }) {
	const [searchParams, setSearchParams] = useState({
		location: '',
		minPrice: '',
		maxPrice: '',
		propertyType: ''
	})

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setSearchParams((prev) => ({ ...prev, [name]: value }))
	}

	const handleSearch = (e) => {
		e.preventDefault()
		onSearch(searchParams)
	}

	return (
		<div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-md max-w-7xl mx-auto">
			<form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<div className="space-y-2">
					<label htmlFor="location" className="text-sm font-medium">
						Konum
					</label>
					<div className="relative">
						<MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
						<input
							id="location"
							name="location"
							value={searchParams.location}
							onChange={handleInputChange}
							placeholder="Konum ara..."
							className="w-full pl-10 pr-3 py-2 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
						/>
					</div>
				</div>

				<div className="space-y-2">
					<label className="text-sm font-medium">Fiyat Aralığı</label>
					<div className="flex gap-2">
						<input
							name="minPrice"
							value={searchParams.minPrice}
							onChange={handleInputChange}
							placeholder="Min"
							type="number"
							className="w-full px-3 py-2 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
						/>
						<input
							name="maxPrice"
							value={searchParams.maxPrice}
							onChange={handleInputChange}
							placeholder="Max"
							type="number"
							className="w-full px-3 py-2 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
						/>
					</div>
				</div>

				<div className="space-y-2">
					<label htmlFor="propertyType" className="text-sm font-medium">
						Emlak Tipi
					</label>
					<select
						id="propertyType"
						name="propertyType"
						value={searchParams.propertyType}
						onChange={handleInputChange}
						className="w-full px-3 py-2 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
					>
						<option value="">Tümü</option>
						<option value="daire">Daire</option>
						<option value="villa">Villa</option>
						<option value="mustakil">Müstakil Ev</option>
						<option value="ticari">Ticari</option>
						<option value="arsa">Arsa</option>
					</select>
				</div>

				<div className="flex items-end">
					<button
						type="submit"
						className="w-full bg-white text-indigo-600 hover:bg-indigo-100 transition-colors duration-300 font-medium py-2 px-4 rounded-md flex items-center justify-center"
					>
						<Search className="w-5 h-5 mr-2" />
						Ara
					</button>
				</div>
			</form>
		</div>
	)
}
