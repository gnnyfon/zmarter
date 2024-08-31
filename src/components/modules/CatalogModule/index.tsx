'use client';

import { useState } from 'react';
import { Navbar } from "@/components/elements"
import { Searchbar } from "@/components/elements"
import CatalogCategorySection from "./sections/CatalogCategorySection"
import CatalogCardSection from "./sections/CatalogCardSection"

export const CatalogModule = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
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
        </div>
    )
}