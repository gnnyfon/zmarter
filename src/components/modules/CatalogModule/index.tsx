import { Navbar } from "@/components/elements"
import { Searchbar } from "@/components/elements"
import CatalogCategorySection from "./sections/CatalogCategorySection"
import CatalogCardSection from "./sections/CatalogCardSection"

export const CatalogModule = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="pt-2">
            <Searchbar input="Mau belanja apa hari ini?"/>
            <main className="flex flex-col gap-3 mt-10 items-center w-full">
                <div className="w-full flex">
                    <div className="w-1/5"> {/* 20% width */}
                        <CatalogCategorySection/>
                    </div>
                    <div className="w-4/5"> {/* 80% width */}
                        <CatalogCardSection/>
                    </div>
                </div>
            </main>
            </div>
        </div>
    )
}