'use client';

import React from "react";
import CatalogCard from "../module-elements/CatalogCard";

const CatalogCardSection: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-4 p-2">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2">
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
        </div>
    );
}

export default CatalogCardSection;