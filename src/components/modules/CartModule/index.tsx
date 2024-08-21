import { Navbar } from "@/components/elements"
import ItemSection from "./sections/ItemSection"
import SummarySection from "./sections/SummarySection"
import RecipeRecommendation from "./sections/RecipeRecommendation"

export const CartModule = () => {
    return (
        <div className="flex flex-col items-center min-h-screen py-10 gap-2 bg-[#F0F3F7]">
            <Navbar />
            <main className="flex flex-col gap-6 mt-10 items-center w-4/5">
                <h1 className="font-bold text-2xl w-full">Keranjang</h1>
                <div className="w-full flex gap-5">
                    <ItemSection />
                    <div className="w-2/5 flex flex-col gap-4">
                        <SummarySection />
                        <RecipeRecommendation />
                    </div>
                </div>
            </main>
        </div>
    )
}