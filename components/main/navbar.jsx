'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/main/mode-toggle'
import { Menu } from 'lucide-react'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const components = [
	{
		title: 'Satılık',
		href: '/satilik'
	},
	{
		title: 'Kiralık',
		href: '/kiralik'
	},
	{
		title: 'Projeler',
		href: '/projeler'
	},
	{
		title: 'Hakkımızda',
		href: '/hakkimizda'
	}
]

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-14 items-center justify-between">
				<div className="flex items-center space-x-4">
					<Link href="/" className="flex items-center space-x-2">
						<span className="text-xl font-bold">EmlakPro</span>
					</Link>

					{/* Masaüstü Menü */}
					<div className="hidden md:block">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger>Keşfet</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
											{components.map((component) => (
												<ListItem key={component.title} title={component.title} href={component.href} />
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								{components.map((component) => (
									<NavigationMenuItem key={component.title}>
										<Link href={component.href} legacyBehavior passHref>
											<NavigationMenuLink className={navigationMenuTriggerStyle()}>
												{component.title}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>

				<div className="flex items-center space-x-4">
					<ModeToggle />
					<Button className="hidden md:inline-flex">İletişime Geç</Button>

					{/* Mobil Menü Butonu */}
					<Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
						<Menu className="h-6 w-6" />
					</Button>
				</div>
			</div>

			{/* Mobil Menü */}
			{isOpen && (
				<div className="md:hidden border-t">
					<div className="container py-4 space-y-2">
						{components.map((component) => (
							<Link
								key={component.title}
								href={component.href}
								className="block px-4 py-2 hover:bg-accent rounded-md"
								onClick={() => setIsOpen(false)}
							>
								{component.title}
							</Link>
						))}
						<Button className="w-full mt-4">İletişime Geç</Button>
					</div>
				</div>
			)}
		</nav>
	)
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					{children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
