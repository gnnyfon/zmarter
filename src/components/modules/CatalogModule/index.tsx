'use client';

import { useState } from 'react';
import { Navbar } from "@/components/elements"
import { Searchbar } from "@/components/elements"
import CatalogCategorySection from "./sections/CatalogCategorySection"
import CatalogCardSection from "./sections/CatalogCardSection"
import Footer from '@/components/elements/Footer';
import Link from 'next/link';
import { useCartContext } from '@/components/contexts/CartContext';

export const CatalogModule = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { cart } = useCartContext()
    const total = cart.reduce((total, item) => total + (item.price * item.quantity!), 0)

    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="pt-2">
            <Searchbar input="Mau belanja apa hari ini?"/>
            <main className="flex flex-col gap-3 mt-10 items-center w-full">
                <div className="w-full flex">
                    <div className="w-1/5"> {/* 20% width */}
                        <CatalogCategorySection onSelectCategory={setSelectedCategory} />
                    </div>
                    <div className="w-4/5"> {/* 80% width */}
                        <CatalogCardSection selectedCategory={selectedCategory} />
                    </div>
                </div>
            </main>
            </div>
            <Footer />
            {cart.length >0 && <div className='bg-white fixed bottom-10 right-10 font-semibold flex gap-3
            shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] p-2 px-6 rounded-lg items-center'>
                <p>{cart.length} items</p>
                |
                <p>Rp{total.toLocaleString('ID-id')}</p>
                <Link href={'/keranjang'} 
                className='gradient-leaf p-2 rounded-2xl px-4 text-white hover:shadow-[0_0_10px_1px_rgba(171,203,146,1)]'>
                    Go to Cart
                </Link>
            </div>}
        </div>
    )
}