'use client';

import React, { useState } from 'react';

type Category = {
    id: number;
    name: string;
    imgSrc: string;
    transform?: string;
};

const categories: Category[] = [
    { id: 1, name: 'Semua Kategori', imgSrc: '/images/semua-kategori.png' },
    { id: 2, name: 'Sayur', imgSrc: '/images/bayam.png' },
    { id: 3, name: 'Buah', imgSrc: '/images/buah.png', transform: 'rotate(180deg)' },
    { id: 4, name: 'Daging', imgSrc: '/images/daging.png' },
    { id: 5, name: 'Susu & Olahan', imgSrc: '/images/susu-dan-olahan.png' },
    { id: 6, name: 'Minuman', imgSrc: '/images/minuman.png' },
    { id: 7, name: 'Makanan Ringan', imgSrc: '/images/makanan-ringan.png' },
    { id: 8, name: 'Roti & Kue', imgSrc: '/images/roti-dan-kue.png' },
];

const CatalogCategorySection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<number | null>(null);

    const handleCategoryClick = (id: number) => {
        setActiveCategory(id);
    };

    return (
        <div className="w-full flex justify-center p-2 ml-5">
            <div className="border-2 rounded-xl p-2 flex flex-col gap-4 bg-white outline outline-gray-600">
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`flex items-center p-4 transition-colors duration-300 ${
                            activeCategory === category.id
                                ? 'bg-[#C5E8A9]'
                                : 'bg-white'
                        }`}
                    >
                        <img
                            src={category.imgSrc}
                            alt={category.name}
                            className={`w-16 h-16 ${category.transform ? category.transform : ''} mr-4`}
                        />
                        <div className="text-black text-lg font-semibold">
                            {category.name}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CatalogCategorySection;
