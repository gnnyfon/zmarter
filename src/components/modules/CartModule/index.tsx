import { Navbar } from "@/components/elements"
import ItemSection from "./sections/ItemSection"
import SummarySection from "./sections/SummarySection"

export const CartModule = () => {
    return (
        <div className="flex flex-col items-center h-screen gap-2 bg-[#F0F3F7]">
            <Navbar />
            <main className="flex flex-col gap-6 mt-20 items-center w-4/5">
                <h1 className="font-bold text-2xl w-full">Keranjang</h1>
                <div className="w-full flex gap-5">
                    <ItemSection />
                    <SummarySection />
                </div>
            </main>
        </div>
    )
}