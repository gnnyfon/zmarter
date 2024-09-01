import Image from "next/image";
import CatalogCard from "../CatalogModule/module-elements/CatalogCard";

function RecipeShopSection() {
    const starIcons = Array(5).fill(null)
    return <>
      <div className="mt-4 ml-32">
        <div className="flex h-fit items-center">
            <h2 className="text-4xl">Beli Bahannya~</h2>
            <div className="h-fit items-center content-center">
                <Image src="/images/elm-line.png" alt="green line" width={829} height={100}/>
            </div>
        </div>
        <div className="w-full flex flex-col gap-4 p-2">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2">
                <CatalogCard selectedCategory='Sayur' />
            </div>
        </div>
      </div>
    </>
  }

export { RecipeShopSection };