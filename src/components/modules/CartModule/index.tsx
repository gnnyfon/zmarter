'use client'
import { Navbar } from "@/components/elements"
import ItemSection from "./sections/ItemSection"
import SummarySection from "./sections/SummarySection"
import RecipeRecommendation from "./sections/RecipeRecommendation"
import Footer from "@/components/elements/Footer"
import { useCartContext } from "@/components/contexts/CartContext"

export const CartModule = () => {
    const { cart } = useCartContext()
    return (
        <div className="flex flex-col items-center min-h-screen pt-10 gap-2 bg-[#F0F3F7]">
            <Navbar />
            <main className="flex flex-col gap-6 my-10 items-center w-4/5">
                <h1 className="font-bold text-2xl w-full">Keranjang</h1>
                <div className="w-full flex gap-5">
                    <ItemSection />
                    {cart.length > 0 && (
                        <div className="w-2/5 flex flex-col gap-4">
                            <SummarySection />
                            <RecipeRecommendation />
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}