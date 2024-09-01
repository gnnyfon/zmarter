'use client';

import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { catalogData } from "../catalogData";
import BahanCard from './BahanCard';

const CatalogCard = ({ selectedCategory }: {selectedCategory: string}) => {
    const allItems = catalogData;

    const filteredItems =
        selectedCategory === 'Semua Kategori' || selectedCategory === 'all'
            ? allItems
            : allItems.filter(item => item.category === selectedCategory);

    return (
        <div style={{width: '1070px', height: '100%', position: 'relative', padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between'}}>
            {filteredItems.map((item) => (
                <BahanCard item={item} key={item.name} />
            ))}
        </div>
    )
};

export default CatalogCard;
